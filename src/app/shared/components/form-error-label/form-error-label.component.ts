import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';
import { FormErrorService } from '@shared/services/form-error.service';

@Component({
  selector: 'form-error-label',
  imports: [],
  templateUrl: './form-error-label.component.html',
  styleUrl: './form-error-label.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormErrorLabelComponent {

  public control = input.required<AbstractControl>();

  private formErrorService = inject(FormErrorService);

  get errorMessage() {
    const errors: ValidationErrors = this.control().errors || {};

    console.log("xx:",errors);

    return this.control().touched && Object.keys(errors).length > 0
      ? this.formErrorService.getTextError(errors)
      : null;
  }

}
