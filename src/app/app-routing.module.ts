import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './client/client.component';
import { MainComponent } from './main/main.component';
import { ContratComponent } from './contrat/contrat.component';

const routes: Routes = [
  { path: 'employes', component: ClientComponent },
  { path: '', component: MainComponent },
  { path: 'contrat', component: ContratComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
