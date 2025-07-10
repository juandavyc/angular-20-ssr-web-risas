import { ContactUsService } from './service/contact-us.service';
import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { UiTitleComponent } from '@shared/ui/ui-title/ui-title.component';
import { ContactRequest, ContactResponse } from './interfaces';
import { rxResource } from '@angular/core/rxjs-interop';
import { of } from 'rxjs';
import { JsonPipe } from '@angular/common';

@Component({
  //selector: 'app-contact-us-page',
  imports: [
    UiTitleComponent,
    ReactiveFormsModule,
  ],
  templateUrl: './contact-us-page.component.html',
  styleUrl: './contact-us-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ContactUsPageComponent {

  private fb = inject(FormBuilder);
  private contactUsService = inject(ContactUsService);

  private formPayload = signal<ContactRequest | null>(null);

  public myForm = this.fb.group({
    name: ['', [Validators.required]],
    phoneNumber: ['', [Validators.required]],
    message: ['', [Validators.required]],
  });

  public contactUsRx = rxResource<ContactResponse | null, ContactRequest | null>({
    params: () => this.formPayload(),
    stream: ({ params: formPayload }) => {
      if (!formPayload) return of(null);
      return this.contactUsService.sendMessage(formPayload);
    },
    defaultValue: null
  });


  value = computed(() => this.contactUsRx.hasValue() ? this.contactUsRx.value() : null)
  message = computed(() => this.value()?.message ?? '')

  public onSubmit(): void {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }

    this.formPayload.set({
      name: this.myForm.controls.name.value,
      phoneNumber: this.myForm.controls.phoneNumber.value,
      message: this.myForm.controls.message.value,
    });
  }
}
