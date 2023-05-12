import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './client/client.component';
import { MainComponent } from './main/main.component';
import { ContratComponent } from './contrat/contrat.component';
import { AgentComponent } from './agent/agent.component';
import { SinistreComponent } from './sinistre/sinistre.component';
import { AideComponent } from './aide/aide.component';

const routes: Routes = [
  { path: 'employes', component: ClientComponent },
  { path: '', component: MainComponent },
  { path: 'contrat', component: ContratComponent },
  {path: 'agent', component: AgentComponent},
  {path: 'sinistre', component: SinistreComponent},
  {path: 'aide', component: AideComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
