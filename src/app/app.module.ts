import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { InventoryComponent } from './inventory/inventory.component';
import { ReportsComponent } from './reports/reports.component';
import { SettingsComponent } from './settings/settings.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { ManageUserComponent } from './manage-user/manage-user.component';
import { ManageInventoryComponent } from './manage-inventory/manage-inventory.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EditInventoryComponent } from './Edit-inventory/Edit-inventory.component';
import { EditManufacturerComponent } from './Edit-manufacturer/Edit-manufacturer.component';
import { PrescriptionComponent } from './prescription/prescription.component';
import { EditProductNameComponent } from './Edit-product-name/Edit-product-name.component';
import { EditProductImageComponent } from './Edit-product-image/Edit-product-image.component';
import { EditCategoryComponent } from './edit-category/edit-category.component';
import { SearchPipe } from './Service/search.pipe';
import { ReportDetailsComponent } from './report-details/report-details.component';
import { OrdersComponent } from './orders/orders.component';
import { EditUnitSizeComponent } from './edit-unit-size/edit-unit-size.component';
import { EditTypesComponent } from './edit-types/edit-types.component';
import { ManagePatientsComponent } from './manage-patients/manage-patients.component';
import { OrderDetailsComponent } from './order-details/order-details.component';

@NgModule({
  declarations: [AppComponent, OrderDetailsComponent, ManagePatientsComponent, EditTypesComponent, EditUnitSizeComponent, SearchPipe, OrdersComponent, ReportDetailsComponent, InventoryComponent, EditCategoryComponent, EditProductImageComponent, EditProductNameComponent, PrescriptionComponent, ManageInventoryComponent, EditInventoryComponent, EditManufacturerComponent, ReportsComponent, SettingsComponent, MyProfileComponent, ManageUserComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, CommonModule, FormsModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
