import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { PartnerlistComponent } from './partnerlist/partnerlist.component';
import { OutingpandaLandingComponent } from './outingpanda-landing/outingpanda-landing.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { SearchItemComponent } from './search-item/search-item.component';



const routes: Routes = [
  { path: '', component: OutingpandaLandingComponent, pathMatch: 'full' },
 // { path: 'outingpanda-landing', component: OutingpandaLandingComponent },
  { path: 'outingpanda-landing', component: OutingpandaLandingComponent
	


   },
  { path: 'add-student', component: AddStudentComponent },
  { path: 'search-item', component: SearchItemComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
