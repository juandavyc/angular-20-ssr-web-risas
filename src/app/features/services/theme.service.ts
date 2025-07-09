import { computed, DOCUMENT, effect, inject, Injectable, Renderer2, signal } from '@angular/core';
import { THEMES } from '../enums/themes.enum';
import { PlatformIdService } from '@shared/services/platform-id.service';


@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private theme = signal<THEMES>(THEMES.LIGHT);
  private platformidService = inject(PlatformIdService);

  private render = inject(Renderer2);
  private document = inject(DOCUMENT);

  constructor() {
    effect(() => {
      if (!this.platformidService.isBrowser()) return;
      this.render.setAttribute(this.document.documentElement, 'data-theme', this.theme());
    })
  }


  public currentTheme = computed(() => {
    const theme = this.theme();
    return (theme == THEMES.LIGHT) ? true : false;
  })

  public toggleTheme() {
    this.theme.update(theme =>
      theme == THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT
    );
  }




}
