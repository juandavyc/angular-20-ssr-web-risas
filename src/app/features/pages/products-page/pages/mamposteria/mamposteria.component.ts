import { TitleCasePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SocialShareComponent } from '@shared/components/social-share/social-share.component';
import { BuyOptionsComponent } from '../../components/buy-options/buy-options.component';

@Component({
 // selector: 'app-mamposteria',
  imports: [
    RouterLink,
    SocialShareComponent,
    BuyOptionsComponent,
    TitleCasePipe,],
  templateUrl: './mamposteria.component.html',
  styleUrl: './mamposteria.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class MamposteriaComponent {

}
