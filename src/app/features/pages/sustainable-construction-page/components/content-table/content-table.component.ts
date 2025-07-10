import { ChangeDetectionStrategy, Component, output } from '@angular/core';

@Component({
  selector: 'content-table',
  imports: [],
  templateUrl: './content-table.component.html',
  styleUrl: './content-table.component.css',
  //changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContentTableComponent {

  public jumpTo = output<number>();

  public scrollToElement(index:number):void{
    this.jumpTo.emit(index);
  }

}
