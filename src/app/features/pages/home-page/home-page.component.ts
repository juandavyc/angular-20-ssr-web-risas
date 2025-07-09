import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeroComponent } from './components/hero/hero.component';
import { HighlightsComponent } from './components/highlights/highlights.component';
import { StatsComponent } from './components/stats/stats.component';
import { ProductsComponent } from './components/products/products.component';
import { BenefitsComponent } from './components/benefits/benefits.component';
import { UbicationComponent } from './components/ubication/ubication.component';

@Component({
  selector: 'app-home-page',
  imports: [
    HeroComponent,
    StatsComponent,
    HighlightsComponent,
    ProductsComponent,
    BenefitsComponent,
    UbicationComponent,
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
  //changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent {

}
