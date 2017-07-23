import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { ProductComponent } from './product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: 'employee', component: EmployeeComponent },
      { path: 'product', component: ProductComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
