import {Routes} from "@angular/router";
import {JobListComponent} from "../components/job-list/job-list.component";
import {JobResolveService} from "../services/resolve/job-resolve.service";
import {VacancyDetailsComponent} from "../components/vacancy-details/vacancy-details.component";


export const routes: Routes = [
  {
    path: '', resolve: {value: JobResolveService}, component: JobListComponent
  },
  {
    path: 'id', resolve: {value:JobResolveService}, component: VacancyDetailsComponent
  }
]
