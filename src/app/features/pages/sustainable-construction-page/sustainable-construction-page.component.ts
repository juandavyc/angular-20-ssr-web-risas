import { ChangeDetectionStrategy, Component, ElementRef, viewChild } from '@angular/core';
import { UiTitleComponent } from '@shared/ui/ui-title/ui-title.component';
import { ContentTableComponent } from './components/content-table/content-table.component';

@Component({
  selector: 'app-sustainable-construction-page',
  imports: [
    UiTitleComponent,
    ContentTableComponent,
  ],
  templateUrl: './sustainable-construction-page.component.html',
  styleUrl: './sustainable-construction-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class SustainableConstructionPageComponent {


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
