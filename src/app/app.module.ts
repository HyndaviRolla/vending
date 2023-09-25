import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { VendingMachineModel } from './vending-machine';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VendingMachineComponent } from './vending-machine/vending-machine.component';

@NgModule({
  declarations: [
    AppComponent,
    VendingMachineComponent
  ],
  
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [VendingMachineModel],
  bootstrap: [AppComponent]
})
export class AppModule { }
