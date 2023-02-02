import { LoadingScreenComponent } from './screens/loading-screen/loading-screen.component';
import { InventoryScreenComponent } from './screens/inventory-screen/inventory-screen.component';
import { NotFoundScreenComponent } from './screens/not-found-screen/not-found-screen.component';
import { StartingScreenComponent } from './screens/starting-screen/starting-screen.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export enum routeNames {
  starting = 'starting',
  inventory = 'inventory',
  mainMenu = 'main-menu',
  notFound = 'page-not-found',
  loading = 'loading',
}

const routes: Routes = [
  {
    path: '',
    redirectTo: routeNames.starting,
    pathMatch: 'full',
  },
  {
    path: routeNames.starting,
    component: StartingScreenComponent,
  },
  {
    path: routeNames.inventory,
    component: InventoryScreenComponent,
  },
  {
    path: routeNames.loading,
    component: LoadingScreenComponent,
  },
  {
    path: routeNames.notFound,
    component: NotFoundScreenComponent,
  },
  { path: '**', component: NotFoundScreenComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
