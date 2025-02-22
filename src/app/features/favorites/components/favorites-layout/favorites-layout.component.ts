import { IDropdown } from '@/interfaces/common.interface';
import { AppState } from '@/ngrx/app.reducer';
import { togglefavorite } from '@/ngrx/favorites-reducer/actions/favorites.action';
import { WeatherDialogComponent } from '@/weather/components/weather-dialog/weather-dialog.component';
import { Component, inject, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Store } from '@ngrx/store';
import { PulpolineCardComponent } from '@shared/components/pulpoline-card/pulpoline-card.component';

@Component({
  selector: 'app-favorites-layout',
  imports: [
    PulpolineCardComponent,
    MatIconModule,
    MatTooltipModule,
    MatButtonModule
  ],
  templateUrl: './favorites-layout.component.html',
  styleUrl: './favorites-layout.component.scss'
})
export default class FavoritesLayoutComponent implements OnInit {

  private readonly _store = inject(Store<AppState>);
  private readonly _dialog = inject(MatDialog);

  public favoritesItems: IDropdown[] = [];

  ngOnInit(): void {
    this.getFavoriteElements();
  }

  public checkFavoriteElement(item: IDropdown): boolean {
    return !!this.favoritesItems.find(fav => fav.id === item.id);
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

  public handflerFavorite(favorite: IDropdown) {
    this._store.dispatch(togglefavorite({ favorite }));
  }

  private getFavoriteElements() {
    this._store.select('favorites')
      .subscribe(
        {
          next: ({ favorites }) => {
            this.favoritesItems = favorites ?? [];
          }
        }
      )
  }

}
