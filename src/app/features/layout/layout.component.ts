import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { SidebarComponent } from '../components/sidebar/sidebar.component';
import { UiFooterComponent } from '../components/ui-footer/ui-footer.component';
import { WhatsappComponent } from "../components/whatsapp/whatsapp.component";


@Component({
  selector: 'app-layout',
  imports: [
    RouterOutlet,
    NavbarComponent,
    SidebarComponent,
    UiFooterComponent,
    WhatsappComponent
],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutComponent {

  public isOpen = signal<boolean>(false);

  public toggleDrawer(status: boolean): void {
    this.isOpen.set(status);
  }


}
