import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'ui-logo',
  imports: [
    RouterLink,
  ],
  templateUrl: './logo.component.html',
  styleUrl: './logo.component.css',
  //changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LogoComponent {

  public readonly appName = environment.appName;
  public readonly appNameAlt = environment.appNameAlt;

}
