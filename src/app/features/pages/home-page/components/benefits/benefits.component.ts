import { ChangeDetectionStrategy, Component } from '@angular/core';
import { UiTitleComponent } from '@shared/ui/ui-title/ui-title.component';
import { homeConfig } from '../../configs/home.config';
import { Benefit } from '../../interfaces';

@Component({
  selector: 'benefits',
  imports: [
    UiTitleComponent,
  ],
  templateUrl: './benefits.component.html',
  styleUrl: './benefits.component.css',
  //changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BenefitsComponent {

  public readonly benefits:Benefit[] = homeConfig.benefits;

}
