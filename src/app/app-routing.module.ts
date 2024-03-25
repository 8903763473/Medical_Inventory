import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { InventoryComponent } from './inventory/inventory.component';
import { SettingsComponent } from './settings/settings.component';
import { ReportsComponent } from './reports/reports.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { ManageUserComponent } from './manage-user/manage-user.component';
import { ManageInventoryComponent } from './manage-inventory/manage-inventory.component';
import { EditInventoryComponent } from './Edit-inventory/Edit-inventory.component';
import { EditManufacturerComponent } from './Edit-manufacturer/Edit-manufacturer.component';
import { PrescriptionComponent } from './prescription/prescription.component';
import { EditProductNameComponent } from './Edit-product-name/Edit-product-name.component';
import { EditProductImageComponent } from './Edit-product-image/Edit-product-image.component';
import { EditCategoryComponent } from './edit-category/edit-category.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'Inventory',
    component: InventoryComponent
  },
  {
    path: 'Settings',
    component: SettingsComponent
  },
  {
    path: 'Reports',
    component: ReportsComponent
  },
  {
    path: 'MyProfile',
    component: MyProfileComponent
  },
  {
    path: 'ManageUser',
    component: ManageUserComponent
  },
  {
    path: 'Manage-Inventory',
    component: ManageInventoryComponent
  },
  {
    path: 'Edit_Inventory',
    component: EditInventoryComponent
  },
  {
    path: 'Edit_Manufacturer',
    component: EditManufacturerComponent
  },
  {
    path: 'prescription',
    component: PrescriptionComponent
  },
  {
    path: 'Edit_productName',
    component: EditProductNameComponent
  },
  {
    path: 'Edit_productImage',
    component: EditProductImageComponent
  },
  {
    path: 'Edit_Categories',
    component: EditCategoryComponent
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
