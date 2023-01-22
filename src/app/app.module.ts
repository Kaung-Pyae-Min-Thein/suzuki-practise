import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TestingComponent } from './components/testing/testing.component';

import { InfoComponent } from './components/info/info.component';
import { ButtonComponent } from './components/button/button.component';
import { DealerInfoComponent } from './components/dealer-info/dealer-info.component';
import { HomeComponent } from './view/home/home.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TestingComponent,
    FooterComponent,
    InfoComponent,
    ButtonComponent,
    DealerInfoComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
