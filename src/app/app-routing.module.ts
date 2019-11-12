import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AssetListComponent } from './pages/assets/asset-list/asset-list.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AssetCategoryListComponent } from './pages/asset-categories/asset-category-list/asset-category-list.component';
import { AddAssetComponent } from './pages/assets/add-asset/add-asset.component';
import { AddAssetCategoryComponent } from './pages/asset-categories/add-asset-category/add-asset-category.component';
import { AssetEditComponent } from './pages/assets/asset-edit/asset-edit.component';
import { EditAssetCategoryComponent } from './pages/asset-categories/edit-asset-category/edit-asset-category.component';


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
    path: 'tai-san/chinh-sua',
    component: AssetEditComponent
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
  },
  {
    path: 'danh-muc-tai-san/chinh-sua',
    component: EditAssetCategoryComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
