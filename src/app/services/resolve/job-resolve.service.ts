import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {IJob} from "../../models/IJob";
import {Observable} from "rxjs";
import {JobService} from "../job.service";


@Injectable({
  providedIn: 'root'
})
export class JobResolveService implements Resolve<IJob[]>{

  constructor(private jobService:JobService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IJob[]> | Promise<IJob[]> | IJob[] {
    return this.jobService.getAll()
  }

}
