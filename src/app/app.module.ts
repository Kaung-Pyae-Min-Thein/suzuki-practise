import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { TestingComponent } from './components/testing/testing.component';
import { FooterComponent } from './components/footer/footer.component';
import { InfoComponent } from './components/info/info.component';
import { ButtonComponent } from './components/button/button.component';
import { DealerInfoComponent } from './components/dealer-info/dealer-info.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TestingComponent,
    FooterComponent,
    InfoComponent,
    ButtonComponent,
    DealerInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
