import { ChangeDetectionStrategy, Component } from '@angular/core';
import { UiTitleComponent } from '@shared/ui/ui-title/ui-title.component';

@Component({
  selector: 'app-contact-us-page',
  imports: [
    UiTitleComponent
],
  templateUrl: './contact-us-page.component.html',
  styleUrl: './contact-us-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ContactUsPageComponent { }
