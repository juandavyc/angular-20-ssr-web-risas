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
      title: 'Reducción',
      value: '40%',
      description: 'de CO2',
      icon: 'fa-solid fa-leaf',
    },
    {
      title: 'Materiales',
      value: '100%',
      description: 'Reciclados',
      icon: 'fa-solid fa-recycle',
    },
    {
      title: 'Clientes',
      value: '85%',
      description: 'Satisfechos',
      icon: 'fa-solid fa-smile',
    }
  ];

}
