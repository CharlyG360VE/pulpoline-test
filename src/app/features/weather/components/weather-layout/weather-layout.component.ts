import { IDropdown } from '@/interfaces/common.interface';
import { FILTER_AUTOCOMPLETE_OPTIONS } from '@/weather/helpers/form-options.helper';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject } from '@angular/core';
import { FormControl, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { AutocompleteFormComponent } from '@shared/components-forms/autocomplete-form/autocomplete-form.component';
import { PulpolineCardComponent } from '@shared/components/pulpoline-card/pulpoline-card.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { WeatherDialogComponent } from '../weather-dialog/weather-dialog.component';

@Component({
  selector: 'app-weather-layout',
  imports: [
    AutocompleteFormComponent,
    ReactiveFormsModule,
    PulpolineCardComponent,
    MatIconModule,
    MatTooltipModule,
    MatButtonModule
  ],
  templateUrl: './weather-layout.component.html',
  styleUrl: './weather-layout.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class WeatherLayoutComponent {

  private readonly _fb = inject(NonNullableFormBuilder);
  private readonly _changeDetectorRef = inject(ChangeDetectorRef);
  private readonly _dialog = inject(MatDialog);
  private _searchResult: IDropdown[] = [];

  public form = this._fb.group<{ q: FormControl<string> }>(
    {
      q: this._fb.control('', { validators: Validators.minLength(2) })
    }
  );

  public get filterAutocompleteOptions() {
    return FILTER_AUTOCOMPLETE_OPTIONS;
  }

  public get searchResult() {
    return this._searchResult;
  }

  public getResult(items: IDropdown[]) {
    this._searchResult = items;
    this._changeDetectorRef.detectChanges();
  }

  public showWeather(item: IDropdown) {
    this._dialog.open(
      WeatherDialogComponent,
      {
        minWidth: '45vw',
        maxHeight: '50vh',
        enterAnimationDuration: 500,
        exitAnimationDuration: 100,
        disableClose: true,
        hasBackdrop: true,
        autoFocus: true,
        data: `${item.name} ${item.alternativeName ?? ''}`
      }
    );
  }

}
