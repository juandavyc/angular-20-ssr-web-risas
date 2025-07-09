import { ChangeDetectionStrategy, Component, computed, DOCUMENT, effect, inject, OnInit, Renderer2, signal } from '@angular/core';
import { THEMES } from '../../enums/themes.enum';
import { PlatformIdService } from '@shared/services/platform-id.service';

@Component({
  selector: 'swap-theme',
  imports: [],
  templateUrl: './swap-theme.component.html',
  styleUrl: './swap-theme.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SwapThemeComponent implements OnInit {

  private platformidService = inject(PlatformIdService);

  private render = inject(Renderer2);
  private document = inject(DOCUMENT);

  private currentTheme = signal<THEMES>(THEMES.LIGHT);

  ngOnInit(): void {
    this.loadThemeFromLocalStorage();
  }

  private themeEffect = effect(() => {
    const theme = this.currentTheme();
    if (!this.platformidService.isBrowser()) {
      this.render.setAttribute(this.document.documentElement, 'data-theme', theme);
      return
    }
    localStorage.setItem('theme', theme)
    this.render.setAttribute(this.document.documentElement, 'data-theme', theme);
  })

  public isLight = computed(() => this.currentTheme() === THEMES.LIGHT);


  public setDark(): void {
    this.currentTheme.set(THEMES.DARK);
  }

  public setLight(): void {
    this.currentTheme.set(THEMES.LIGHT);
  }
  public toggleTheme(): void {
    this.currentTheme.update(theme =>
      (theme === THEMES.LIGHT) ? THEMES.DARK : THEMES.LIGHT);
  }

  private loadThemeFromLocalStorage(): void {
    if (!this.platformidService.isBrowser()) return;

    const savedTheme = localStorage.getItem('theme') ?? THEMES.LIGHT;
    if (Object.values(THEMES).includes(savedTheme as THEMES)) {
      this.currentTheme.set(savedTheme as THEMES);
    } else {
      this.currentTheme.set(THEMES.LIGHT);
    }
  }

}
