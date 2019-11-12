import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AssetListComponent } from './pages/assets/asset-list/asset-list.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AssetCategoryListComponent } from './pages/asset-categories/asset-category-list/asset-category-list.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AddAssetComponent } from './pages/assets/add-asset/add-asset.component';
import { AddAssetCategoryComponent } from './pages/asset-categories/add-asset-category/add-asset-category.component';
import { AssetEditComponent } from './pages/assets/asset-edit/asset-edit.component';
import { EditAssetCategoryComponent } from './pages/asset-categories/edit-asset-category/edit-asset-category.component';

@NgModule({
  declarations: [
    AppComponent,
    AssetListComponent,
    DashboardComponent,
    AssetCategoryListComponent,
    SidebarComponent,
    NavbarComponent,
    AddAssetComponent,
    AddAssetCategoryComponent,
    AssetEditComponent,
    EditAssetCategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
