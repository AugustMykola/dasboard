import {Component, Input} from '@angular/core';
import {MatCardModule} from "@angular/material/card";
import {ISummaryCard} from "../../core/shared/interfaces/ICard";

@Component({
  selector: 'app-summary-card',
  standalone: true,
  imports: [
    MatCardModule
  ],
  templateUrl: './summary-card.component.html',
  styleUrl: './summary-card.component.scss'
})
export class SummaryCardComponent {
  @Input() summaryCardData: ISummaryCard = {} as ISummaryCard;
}
