import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'basic-form',
  imports: [],
  templateUrl: './basic-form.component.html',
  styleUrl: './basic-form.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BasicFormComponent { }
