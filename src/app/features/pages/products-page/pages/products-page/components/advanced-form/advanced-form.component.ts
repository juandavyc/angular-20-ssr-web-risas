import { TitleCasePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Category, Material, } from '../interfaces';

@Component({
  selector: 'advanced-form',
  imports: [
    TitleCasePipe,
  ],
  templateUrl: './advanced-form.component.html',
  styleUrl: './advanced-form.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdvancedFormComponent {


  public readonly categories: Category[] = [
    {
      id: 1,
      name: "Todos las Categorías",
    },
    {
      id: 2,
      name: "Mampostería ecológica",
    },
    {
      id: 3,
      name: "Kits de emergencia",
    },
    {
      id: 4,
      name: "Prefabricados",
    }
  ];

  public readonly materials: Material[] = [
    {
      id: 1,
      name: "Todos los materiales",
    },
    {
      id: 2,
      name: "Plástico PET reciclado",
    },
    {
      id: 3,
      name: "Residuos de construcción (RCD)",
    },
    {
      id: 4,
      name: "Aceites quemados tratados",
    }
  ];

}
