import { ChangeDetectionStrategy, Component, ElementRef, signal, viewChild } from '@angular/core';
import { UiTitleComponent } from '@shared/ui/ui-title/ui-title.component';
import { aboutUsConfig } from './config/about.config';
import { ContentTableComponent } from './components/content-table/content-table.component';
import { TimeLineComponent } from './components/time-line/time-line.component';

@Component({
  selector: 'app-about-us-page',
  imports: [
    UiTitleComponent,
    ContentTableComponent,
    TimeLineComponent,
  ],
  templateUrl: './about-us-page.component.html',
  styleUrl: './about-us-page.component.css',
  //changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class AboutUsPageComponent {

  public readonly title = aboutUsConfig.title;

  private mision = viewChild<ElementRef<HTMLDivElement>>('mision');
  private vision = viewChild<ElementRef<HTMLDivElement>>('vision');
  private timeLine = viewChild<ElementRef<HTMLDivElement>>('timeLine');
  private commitment = viewChild<ElementRef<HTMLDivElement>>('commitment');

  public scrollToElement(index: number) {

    switch (index) {
      case 0: this.mision()?.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'center' }); break;
      case 1: this.vision()?.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'center' }); break;
      case 2: this.timeLine()?.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'center' }); break;
      case 3: this.commitment()?.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'center' }); break;
    }


  }

}
