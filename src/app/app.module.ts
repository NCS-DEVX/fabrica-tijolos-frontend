import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NotifierModule } from 'angular-notifier';

import { AppComponent } from './app.component';
import { TijolosComponent } from './pages/tijolos/tijolos.component';
import { RelatorioComponent } from './pages/relatorio/relatorio.component';
import { DetalhesTijoloComponent } from './pages/detalhes-tijolo/detalhes-tijolo.component';

const routes: Routes = [
  { path: '', component: TijolosComponent },
  { path: 'relatorio', component: RelatorioComponent },
  { path: 'tijolo/:id', component: DetalhesTijoloComponent } // ✅ nova rota adicionada
];

@NgModule({
  declarations: [
    AppComponent,
    TijolosComponent,
    RelatorioComponent,
    DetalhesTijoloComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    NotifierModule.withConfig({
      position: {
        horizontal: { position: 'right' },
        vertical: { position: 'top' }
      },
      theme: 'material',
      behaviour: {
        autoHide: 3000,
        onClick: 'hide',
        onMouseover: 'pauseAutoHide',
        showDismissButton: true
      },
      animations: {
        enabled: true,
        show: { preset: 'slide', speed: 300, easing: 'ease' },
        hide: { preset: 'fade', speed: 300, easing: 'ease', offset: 50 }
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }