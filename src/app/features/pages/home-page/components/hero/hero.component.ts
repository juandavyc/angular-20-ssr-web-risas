import { afterNextRender, ChangeDetectionStrategy, Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, viewChild } from '@angular/core';
// import { SwiperContainer } from 'swiper/element';
// import { SwiperOptions } from 'swiper/types';
// import { register } from 'swiper/element/bundle';
import { homeConfig } from '../../configs/home.config';
import { Hero } from '../../interfaces';
import { RouterLink } from '@angular/router';
// register();
@Component({
  selector: 'hero',
  imports: [
    RouterLink,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroComponent {

  // private swiperRef = viewChild.required<ElementRef<SwiperContainer>>('swiperRef');

  // public readonly slides:Hero[] = homeConfig.hero;

  // constructor() {
  //   afterNextRender(() => {
  //     this.initSwiper();
  //   });
  // }
  // private initSwiper() {
  //   const swiperOptions: SwiperOptions = {
  //     slidesPerView: 1,
  //     autoplay: {
  //       delay: 10000
  //     },
  //     loop: true,
  //     centeredSlides: true,
  //   };

  //   Object.assign(this.swiperRef().nativeElement, swiperOptions);
  //   this.swiperRef().nativeElement.initialize();
  // }


}
