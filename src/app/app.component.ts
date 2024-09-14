import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {MatButton} from "@angular/material/button";
import {SummaryCardComponent} from "./components/summary-card/summary-card.component";
import {NgForOf} from "@angular/common";
import {ILocationCard, ISummaryCard} from "./core/shared/interfaces/ICard";
import {MatDividerModule} from "@angular/material/divider";
import {LocationCardComponent} from "./components/location-card/location-card.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatButton, SummaryCardComponent, NgForOf, MatDividerModule, LocationCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'dashboard';
  summaryCardsList: ISummaryCard[] = [
    {title: 'Total Loyalty Members', content: {value: '148', additionalText: '(+12 L30D)'}},
    {title: 'Total Loyalty Revenue', content: {value: '$56,772', additionalText: '(+ $4332 L30D)'}},
    {title: 'Total Referrals', content: {value: '33', additionalText: '(+4 L30D)'}},
    {title: 'CSAT/NPS Score', content: {value: '9.2/10', additionalText: '(122 Votes)'}}
  ]

  locationCardsList: ILocationCard[] = [
    {image: 'logo.jpg', title: 'Location Name', content: {text: ['Survey CSAT/NPS Score', 'Loyalty Program', 'Reviews']}},
    {image: 'logo.jpg', title: 'Location Name', content: {text: ['Survey CSAT/NPS Score', 'Loyalty Program', 'Reviews']}},
    {image: 'logo.jpg', title: 'Location Name', content: {text: ['Survey CSAT/NPS Score', 'Loyalty Program', 'Reviews']}}
  ]
}
