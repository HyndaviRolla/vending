 
import { Component } from '@angular/core'; 
import { VendingMachineModel } from '/home/hyndavi24/vending-machine/src/app/vending-machine' 
import { Section } from '../section';

@Component({
  selector: 'app-vending-machine',
  templateUrl: './vending-machine.component.html',
  styleUrls: ['./vending-machine.component.css']
})
export class VendingMachineComponent {
  ProductId: string = '';
  Section: Section | null = null;
  bill: number = 0;
  sections: Section[] = []; 
  doorOpen: boolean = false;
  constructor(private vendingMachineModel: VendingMachineModel) { 
    this.sections = this.vendingMachineModel.getSections();
  }
  
  openDoor() {
    const sectionContainingProduct = this.vendingMachineModel.sections.find((section:Section) =>
      section.products.some((product:any) => product.id === this.ProductId.toUpperCase())
    );

    if (sectionContainingProduct) {
      this.Section = sectionContainingProduct;
      this.doorOpen = true;
    } else { 
      this.Section = null;
      this.doorOpen = false;
    }
  }  

  decrementProductQuantity(product: any) {
    if (product.quantity > 0) {
      product.quantity--;
      this.bill+=product.price;
    }
  } 

  closeDoor() { 
    this.Section = null;
    this.doorOpen = false;
  }
}
