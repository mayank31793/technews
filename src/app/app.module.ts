import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MDBBootstrapModule } from './typescripts/free';
import { AgmCoreModule } from '@agm/core';
import { AppComponent } from './app.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ZenHomeComponent } from './zen-home/zen-home.component';
import { ZenHeaderComponent } from './zen-home/zen-header/zen-header.component';
import { ZenCategoryComponent } from './zen-home/zen-category/zen-category.component';
import { ZenNewscontainerComponent } from './zen-home/zen-newscontainer/zen-newscontainer.component';
import { ZenTopvideosComponent } from './zen-home/zen-topvideos/zen-topvideos.component';
import { ZenFooterComponent } from './zen-home/zen-footer/zen-footer.component';
import { ZenSearchComponent } from './zen-home/zen-header/zen-search/zen-search.component';
import { ZenUserComponent } from './zen-home/zen-header/zen-user/zen-user.component';
import { ZenLoginComponent } from './zen-home/zen-header/zen-user/zen-login/zen-login.component';
import { ZenNewsComponent } from './zen-home/zen-newscontainer/zen-news/zen-news.component';

@NgModule({
  declarations: [
    AppComponent,
    ZenHomeComponent,
    ZenHeaderComponent,
    ZenCategoryComponent,
    ZenNewscontainerComponent,
    ZenTopvideosComponent,
    ZenFooterComponent,
    ZenSearchComponent,
    ZenUserComponent,
    ZenLoginComponent,
    ZenNewsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    MDBBootstrapModule.forRoot(),
    NgbModule.forRoot(),
    AgmCoreModule.forRoot({
      // https://developers.google.com/maps/documentation/javascript/get-api-key?hl=en#key
      apiKey: 'Your_api_key'
    })
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas:      [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }
