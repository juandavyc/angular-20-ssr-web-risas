import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SocialNetworks } from './enums/social-networks.enum';
import { PlatformIdService } from '@shared/services/platform-id.service';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'social-share',
  imports: [
    TitleCasePipe,
  ],
  templateUrl: './social-share.component.html',
  styleUrl: './social-share.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SocialShareComponent {


  private platformIdService = inject(PlatformIdService);

  public socialNetworks = SocialNetworks;

  private socialNetworksMap = new Map<SocialNetworks, string>([
    [SocialNetworks.FACEBOOK, 'https://www.facebook.com/sharer/sharer.php?u='],
    [SocialNetworks.WHATSAPP, 'https://api.whatsapp.com/send?text='],
  ]);

  public shareWith(socialNetworks: SocialNetworks): void {

    if (!this.platformIdService.isBrowser()) return;

    const url = this.socialNetworksMap.get(socialNetworks);
    const currentUrl = window.location.href;
    window.open(`${url}${currentUrl}`);


  }


}
