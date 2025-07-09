import { Component, inject, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { delay, filter, map, Observable, startWith, take, tap } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';
import { PlatformIdService } from '@shared/services/platform-id.service';
import AOS from 'aos';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {


  protected title = 'risas-web-page';

  private platformidService = inject(PlatformIdService);

  private router = inject(Router);

  public isLoading = toSignal(
    this.router.events.pipe(
      delay(500),
      filter(event => event instanceof NavigationEnd),
      map(() => false),
      take(1),
    ), { initialValue: true }
  )

  ngOnInit(): void {
    if (!this.platformidService.isBrowser()) return;
    AOS.init({
      duration: 1000,
      // easing: 'ease-in-out',
      // once: true
    });
  }
}

