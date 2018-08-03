import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InfoComponent } from './info.component';
import { MainComponent } from './main.component';

const appRoutes: Routes = [
	{
		path: 'info',
		component: InfoComponent
	},
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'home',
    component: MainComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    InfoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
