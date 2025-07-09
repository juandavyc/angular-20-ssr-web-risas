import { ChangeDetectionStrategy, Component } from '@angular/core';
import { UiTitleComponent } from '@shared/ui/ui-title/ui-title.component';
import { environment } from 'src/environments/environment';

@Component({
    selector: 'ubication',
    imports: [
        UiTitleComponent,
    ],
    templateUrl: './ubication.component.html',
    styleUrl: './ubication.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UbicationComponent {

    public readonly phoneNumber = environment.phoneNumberOne;
    public whatsappNumber = `https://wa.me/57${environment.phoneNumberOne}?text=Hola%20estoy%20interesado%20en%20más%20información`

}
