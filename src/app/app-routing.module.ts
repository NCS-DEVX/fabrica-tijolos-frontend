import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TijolosComponent } from './pages/tijolos/tijolos.component';
import { RelatorioComponent } from './pages/relatorio/relatorio.component';

const routes: Routes = [
  { path: '', component: TijolosComponent },
  { path: 'relatorio', component: RelatorioComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
