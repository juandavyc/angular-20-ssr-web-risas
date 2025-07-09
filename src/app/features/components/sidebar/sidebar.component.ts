import { ChangeDetectionStrategy, Component, output } from '@angular/core';
import { MenuItemsComponent } from '../menu-items/menu-items.component';
import { LogoComponent } from '@shared/ui/logo/logo.component';

@Component({
  selector: 'ui-sidebar',
  imports: [
    MenuItemsComponent,
    LogoComponent,
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarComponent {

  public closeDrawer = output<void>();

}
