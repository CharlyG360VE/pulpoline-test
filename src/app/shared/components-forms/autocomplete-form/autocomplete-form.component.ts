import { Component, EventEmitter, inject, Input, OnDestroy, Output } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { IAutocompleteOptions } from '../interfaces/auto-complete.interface';
import { IDropdown } from '@/interfaces/common.interface';
import { Subscription } from 'rxjs';
import { CommonConsultService } from '@/services/common-consult/common-consult.service';
import { eHttpMethod } from '@/enums/http-method.enum';
import { HttpParams } from '@angular/common/http';

@Component({
  selector: 'pulpoline-autocomplete',
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    ReactiveFormsModule
  ],
  templateUrl: './autocomplete-form.component.html',
  styleUrl: './autocomplete-form.component.scss'
})
export class AutocompleteFormComponent implements OnDestroy {

  @Input({ required: true }) fc!: FormControl;
  @Input({ required: true }) options!: IAutocompleteOptions;
  @Input() label = '';
  @Input() placeholder = '';
  @Input() disabledDropdownList = false;
  @Output() result = new EventEmitter<IDropdown[]>();

  private _filterOptions: IDropdown[] = [];
  private readonly _commonConsultSvc = inject(CommonConsultService);
  private readonly _subscription$ = new Subscription();

  get filterOptions() {
    return this._filterOptions;
  }

  ngOnDestroy(): void {
    this._subscription$.unsubscribe();
  }

  public search() {
    this._filterOptions = [];

    if (this.fc.valid) {
      let params = new HttpParams();

      if (this.options.keyQueryParams.length > 0)
        for (const query of this.options.keyQueryParams)
          if (query.hotReplacement)
            params = params.append(query.key, this.fc.value ?? '');
          else
            params = params.append(query.key, query.value);

      this.getFilterOptions(this.options.path, params);
    }
  }

  private async getFilterOptions(path: string, params: HttpParams) {
    try {
      const response = await this._commonConsultSvc.callEndpoint<any[]>(eHttpMethod.GET, path, {}, params);

      if (response) {
        this._filterOptions = [];

        response.forEach(item => {
          this._filterOptions.push(
            {
              id: item[this.options.idMapper],
              name: item[this.options.nameMapper],
              alternativeName: item[this.options.secondaryKeyMapper]
            }
          )
        })

        this.result.emit(this._filterOptions);
      }
    } catch (error) {
      console.error(error);

      this.result.emit(this._filterOptions);
    }
  }

}
