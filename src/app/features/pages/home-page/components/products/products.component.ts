import { ChangeDetectionStrategy, Component } from '@angular/core';
import { UiTitleComponent } from '@shared/ui/ui-title/ui-title.component';
import { homeConfig } from '../../configs/home.config';
import { Products } from '../../interfaces/product.interface';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'products',
  imports: [
    UiTitleComponent,
    RouterLink,
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
  //changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsComponent {

  public readonly products:Products[] = homeConfig.products;

}
