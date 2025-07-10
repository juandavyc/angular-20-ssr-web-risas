import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'ui-footer',
  imports: [
    // LogoComponent,
    // RouterLink,
  ],
  templateUrl: './ui-footer.component.html',
  styleUrl: './ui-footer.component.css',
  //changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiFooterComponent {

  public logo = 'images/logo.png';

  public year = new Date().getFullYear();

  public readonly appName = environment.appName;
  public readonly appNameAlt = environment.appNameAlt;

}
