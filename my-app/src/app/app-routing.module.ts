import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OllieComponent } from './ollie/ollie.component';
import { CitiesComponent } from './cities/cities.component';


const routes: Routes = [
  
  { path: '', component: OllieComponent },
  { path: 'cities', component: CitiesComponent },
  
  
  
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
