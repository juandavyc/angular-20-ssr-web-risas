import { ChangeDetectionStrategy, Component } from '@angular/core';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'whatsapp',
  imports: [],
  templateUrl: './whatsapp.component.html',
  styleUrl: './whatsapp.component.css',
  //changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WhatsappComponent {

  public whatsappNumber = `https://wa.me/57${environment.phoneNumberOne}?text=Hola%20estoy%20interesado%20en%20más%20información`
}
