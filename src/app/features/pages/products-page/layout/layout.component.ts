import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UiTitleComponent } from '@shared/ui/ui-title/ui-title.component';

@Component({
  selector: 'app-layout',
  imports: [
    UiTitleComponent,
    RouterOutlet,
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutComponent { }
