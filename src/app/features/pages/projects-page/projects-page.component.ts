import { ChangeDetectionStrategy, Component } from '@angular/core';
import { UiTitleComponent } from '@shared/ui/ui-title/ui-title.component';

@Component({
  selector: 'app-projects-page',
  imports: [
    UiTitleComponent,
  ],
  templateUrl: './projects-page.component.html',
  styleUrl: './projects-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ProjectsPageComponent { }
