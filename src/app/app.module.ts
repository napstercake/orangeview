import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ImageDayComponent } from './components/image-day/image-day.component';
import { MenuComponent } from './shared/menu/menu.component';
import { NotificationComponent } from './shared/notification/notification.component';
import { CoreService } from './core/service/core.service';

@NgModule({
  declarations: [
    AppComponent,
    ImageDayComponent,
    MenuComponent,
    NotificationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    CoreService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
