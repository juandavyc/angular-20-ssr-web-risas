import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'ui-title',
  imports: [],
  templateUrl: './ui-title.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiTitleComponent {

  public title = input.required<string>();
  public subtitle = input<string>();

}
