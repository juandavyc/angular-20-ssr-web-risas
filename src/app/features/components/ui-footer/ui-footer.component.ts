import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'ui-footer',
  imports: [
  // LogoComponent,
    RouterLink,
  ],
  templateUrl: './ui-footer.component.html',
  styleUrl: './ui-footer.component.css',
  //changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiFooterComponent {

  public logo = 'images/logo.png';

  public year = new Date().getFullYear();

}
