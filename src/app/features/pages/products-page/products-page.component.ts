import { ChangeDetectionStrategy, Component } from '@angular/core';
import { UiTitleComponent } from '@shared/ui/ui-title/ui-title.component';

@Component({
  selector: 'app-products-page',
  imports: [
    UiTitleComponent,
],
  templateUrl: './products-page.component.html',
  styleUrl: './products-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ProductsPageComponent { }
