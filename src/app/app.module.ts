import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { InfoComponent } from './info.component';
import { MainComponent } from './main.component';
import { ListComponent } from './list.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { ListService } from './list.service';

//definicoes das rotas
const appRoutes: Routes = [
	{
		path: 'info',
		component: InfoComponent
	},
  {
    path: 'list',
    component: ListComponent
  },
  {
    path: '',
    component: MainComponent
  }
  
]

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    InfoComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )

  ],
  providers: [ListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
