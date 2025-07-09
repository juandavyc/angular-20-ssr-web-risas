import { Injectable } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormGroup,
  ValidationErrors,
} from '@angular/forms';
@Injectable({
  providedIn: 'root'
})
export class FormErrorService {


  private namePattern = '([a-zA-Z]+) ([a-zA-Z]+)';
  private emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';
  private notOnlySpacesPattern = '^[a-zA-Z0-9]+$';
  private slugPattern = '^[a-z0-9_]+(?:-[a-z0-9_]+)*$';

  constructor() {
  }

  getTextError(errors: ValidationErrors) {
    for (const key of Object.keys(errors)) {
      switch (key) {
        case 'required':
          return 'Este campo es requerido';

        case 'minlength':
          return `Mínimo de ${errors['minlength'].requiredLength} caracteres.`;

        case 'min':
          return `Valor mínimo de ${errors['min'].min}`;

        case 'email':
          return `El valor ingresado no es un correo electrónico`;

        case 'emailTaken':
          return `El correo electrónico ya está siendo usado por otro usuario`;

        case 'noStrider':
          return `No se puede usar el username de strider en la app`;

        case 'pattern':
          if (errors['pattern'].requiredPattern === this.emailPattern) {
            return 'El valor ingresado no luce como un correo electrónico';
          }

          return 'Error de patrón contra expresión regular';

        default:
          return `Error de validación no controlado ${key}`;
      }
    }

    return null;
  }

  isValidField(form: FormGroup, fieldName: string): boolean | null {
    return (
      !!form.controls[fieldName].errors && form.controls[fieldName].touched
    );
  }

  getFieldError(form: FormGroup, fieldName: string): string | null {
    if (!form.controls[fieldName]) return null;

    const errors = form.controls[fieldName].errors ?? {};

    return this.getTextError(errors);
  }

  isValidFieldInArray(formArray: FormArray, index: number) {
    return (
      formArray.controls[index].errors && formArray.controls[index].touched
    );
  }

  getFieldErrorInArray(
    formArray: FormArray,
    index: number
  ): string | null {
    if (formArray.controls.length === 0) return null;

    const errors = formArray.controls[index].errors ?? {};

    return this.getTextError(errors);
  }


}
