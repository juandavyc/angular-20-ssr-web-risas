import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BasicFormComponent } from './components/basic-form/basic-form.component';
import { AdvancedFormComponent } from './components/advanced-form/advanced-form.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { homeConfig } from '../../../home-page/configs/home.config';
import { Products } from '../../../home-page/interfaces';
import { RouterLink } from '@angular/router';
import { TitleCasePipe } from '@angular/common';

@Component({
  // selector: 'app-products-page',
  imports: [
    BasicFormComponent,
    AdvancedFormComponent,
    PaginationComponent,
    RouterLink,
    TitleCasePipe,
  ],
  templateUrl: './products-page.component.html',
  styleUrl: './products-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsPageComponent {

  public readonly products: Products[] = homeConfig.products;


}
