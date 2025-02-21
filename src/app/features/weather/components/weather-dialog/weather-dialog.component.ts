import { eHttpMethod } from '@/enums/http-method.enum';
import { environment } from '@/environments/environment';
import { CommonConsultService } from '@/services/common-consult/common-consult.service';
import { ICurrentWeatherResponse } from '@/weather/interfaces/weather-response.interface';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { UpperCasePipe } from '@angular/common';
import { HttpParams } from '@angular/common/http';
import { Component, inject, Inject, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-weather-dialog',
  imports: [
    UpperCasePipe,
    MatDialogModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './weather-dialog.component.html',
  styleUrl: './weather-dialog.component.scss',
  animations: [
    trigger('fadeInOut', [
      state('void', style({
        opacity: 0
      })),
      transition(':enter, :leave', [
        animate(200)
      ])
    ])
  ]
})
export class WeatherDialogComponent implements OnInit {

  private readonly _commonConsultSvc = inject(CommonConsultService);
  private readonly _subscription$ = new Subscription();

  public currentWeather?: ICurrentWeatherResponse;
  public isLoading = false;

  constructor(@Inject(MAT_DIALOG_DATA) private readonly name: string) { }

  ngOnInit(): void {
    this.getCurrentWeather();
  }

  private async getCurrentWeather() {
    this.isLoading = true;

    const path = `${environment.apiUrl}/current.json`;
    const params = new HttpParams()
      .set('key', environment.apiKey)
      .set('q', this.name);

    try {
      const response = await this._commonConsultSvc.callEndpoint<ICurrentWeatherResponse>(eHttpMethod.GET, path, {}, params);

      if (response)
        this.currentWeather = response;

      this.isLoading = false;
    } catch (error) {
      console.error(error);
      this.isLoading = false;
    }
  }

}
