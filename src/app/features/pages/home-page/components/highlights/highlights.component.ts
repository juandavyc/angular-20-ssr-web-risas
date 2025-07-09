import { ChangeDetectionStrategy, Component } from '@angular/core';
import { UiTitleComponent } from '@shared/ui/ui-title/ui-title.component';
import { homeConfig } from '../../configs/home.config';
import { Highlight } from '../../interfaces/highlight.interface';

@Component({
  selector: 'highlights',
  imports: [
    UiTitleComponent,
  ],
  templateUrl: './highlights.component.html',
  styleUrl: './highlights.component.css',
  //changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HighlightsComponent {

  public readonly highlights: Highlight[] = homeConfig.highlights;

}
