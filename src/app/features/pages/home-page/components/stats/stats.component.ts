import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Stat } from '../../interfaces';

@Component({
  selector: 'stats',
  imports: [],
  templateUrl: './stats.component.html',
  styleUrl: './stats.component.css',
  //changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StatsComponent {

  public readonly stats: Stat[] = [
    {
      title: 'Sedes',
      value: 2,
      description: 'Activas',
      icon: 'fa-regular fa-bookmark',
    },
    {
      title: 'Calidad',
      value: '100%',
      description: 'Premium',
      icon: 'fa-regular fa-newspaper',
    },
    {
      title: 'Años de',
      value: '5',
      description: 'Experiencia',
      icon: 'fa-regular fa-envelope',
    }
  ];

}
