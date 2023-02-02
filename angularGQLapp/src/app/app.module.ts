import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartingScreenComponent } from './screens/starting-screen/starting-screen.component';
import { NotFoundScreenComponent } from './screens/not-found-screen/not-found-screen.component';
import { UpgradeWeaponsScreenComponent } from './screens/upgrade-weapons-screen/upgrade-weapons-screen.component';
import { InventoryScreenComponent } from './screens/inventory-screen/inventory-screen.component';
import { LoadingScreenComponent } from './screens/loading-screen/loading-screen.component';
import { MainMenuScreenComponent } from './screens/main-menu-screen/main-menu-screen.component';
import { ListMenuComponent } from './components/list-menu/list-menu.component';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    StartingScreenComponent,
    NotFoundScreenComponent,
    UpgradeWeaponsScreenComponent,
    InventoryScreenComponent,
    LoadingScreenComponent,
    MainMenuScreenComponent,
    ListMenuComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, GraphQLModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
