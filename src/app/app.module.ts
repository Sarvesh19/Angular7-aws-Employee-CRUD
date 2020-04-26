import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PartnerlistComponent } from './partnerlist/partnerlist.component';
import {DataTablesModule} from 'angular-datatables';
import { OutingpandaLandingComponent } from './outingpanda-landing/outingpanda-landing.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { SearchItemComponent } from './search-item/search-item.component';
import { BlockUIModule } from 'ng-block-ui';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
import { NgbdDatepickerRangePopup } from './custom-directive/datepicker-range/datepicker-range.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import { GooglePlaceModule } from "ngx-google-places-autocomplete";

//import { MaterialModule, MatNativeDateModule } from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    PartnerlistComponent,
    OutingpandaLandingComponent,
    AddStudentComponent,
    NgbdDatepickerRangePopup, 
    SearchItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    DataTablesModule,
    NgbModule,
    MatDatepickerModule,        // <----- import(must)
    MatNativeDateModule,
    GooglePlaceModule,        // <----- import for date formating(optional)
//MatMomentDateModule,
    Ng4LoadingSpinnerModule.forRoot()

  ],

  exports: [NgbdDatepickerRangePopup],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
