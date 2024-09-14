import {Component, inject, Input} from '@angular/core';
import {ILocationCard} from "../../core/shared/interfaces/ICard";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatDivider} from "@angular/material/divider";
import {NgForOf, NgOptimizedImage} from "@angular/common";
import {MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition} from "@angular/material/snack-bar";

@Component({
  selector: 'app-location-card',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatDivider, NgOptimizedImage, NgForOf],
  templateUrl: './location-card.component.html',
  styleUrl: './location-card.component.scss'
})
export class LocationCardComponent {
  @Input() locationCardData: ILocationCard = {} as ILocationCard;

  private _snackBar = inject(MatSnackBar);

  horizontalPosition: MatSnackBarHorizontalPosition = 'start';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';


  openSnackBar(message: string) {
    this._snackBar.open(message, 'Splash', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }
}
