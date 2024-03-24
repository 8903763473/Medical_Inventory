import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { InventoryComponent } from './inventory/inventory.component';
import { SettingsComponent } from './settings/settings.component';
import { ReportsComponent } from './reports/reports.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { ManageUserComponent } from './manage-user/manage-user.component';
import { ManageInventoryComponent } from './manage-inventory/manage-inventory.component';
import { InventoryDetailsComponent } from './inventory-details/inventory-details.component';

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
    path: 'Inventory-details',
    component: InventoryDetailsComponent
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
