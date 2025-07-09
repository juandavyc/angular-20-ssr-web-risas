import { booleanAttribute, ChangeDetectionStrategy, Component, input, linkedSignal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
// import { AppAssets } from '@core/configs';

const NAVBAR = 'menu menu-horizontal uppercase';
const SIDEBAR = 'menu menu-vertical menu-lg uppercase w-full text-black';

@Component({
  selector: 'menu-items',
  imports: [
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: './menu-items.component.html',
  styleUrl: './menu-items.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuItemsComponent {

  public isSidebar = input(false, { transform: booleanAttribute });

  //  public menuClasses = linkedSignal({
  //   source: this.isSidebar,
  //   computation: ((source) => {
  //     if (!source) return NAVBAR;
  //     return SIDEBAR;
  //   })
  // })

  get menuClasses() {
    return this.isSidebar() ? SIDEBAR : NAVBAR;
  }
}
