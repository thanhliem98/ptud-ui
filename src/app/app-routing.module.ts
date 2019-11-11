import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AssetListComponent } from './pages/assets/asset-list/asset-list.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AssetCategoryListComponent } from './pages/asset-categories/asset-category-list/asset-category-list.component';
import { AddAssetComponent } from './pages/assets/add-asset/add-asset.component';
import { AddAssetCategoryComponent } from './pages/asset-categories/add-asset-category/add-asset-category.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: DashboardComponent
  },
  {
    path: 'tai-san',
    component: AssetListComponent
  },
  {
    path: 'tai-san/them-moi',
    component: AddAssetComponent
  },
  {
    path: 'danh-muc-tai-san',
    component: AssetCategoryListComponent
  },
  {
    path: 'danh-muc-tai-san/them-moi',
    component: AddAssetCategoryComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
