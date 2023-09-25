import { Injectable } from '@angular/core';
import { Section } from './section';

@Injectable({
  providedIn: 'root'
})
export class VendingMachineModel {
  sections: Section[] = [
    {
      id: '1',
      name: 'Chocolates',
      products: [
        { id: 'D', name: 'DairyMilk', price: 10, quantity: 12},
        { id: 'K', name: 'Kitkat', price: 15, quantity:10 }
      ]
    },
    
    {
      id: '2',
      name: 'Snacks',
      products: [
        { id: 'P', name: 'Potato Chips', price: 5, quantity: 3 },
        { id: 'C', name: 'Corn', price: 10, quantity:15 }
      ]
    }
  ];

  constructor() { }

  getSections(): Section[] {
    return this.sections;
  }
}
