import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ShowPromptService } from './services/show-prompt.service';
import { GroceryService } from './services/grocery.service';  
import { QuantitySelectModalComponent } from './quantity-select-modal/quantity-select-modal.component';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
@NgModule({
  declarations: [AppComponent, QuantitySelectModalComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, FormsModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, ShowPromptService, GroceryService, SocialSharing],
  bootstrap: [AppComponent]
})
export class AppModule {}
