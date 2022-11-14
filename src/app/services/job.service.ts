import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {IJob} from "../models/IJob";

@Injectable({
  providedIn: 'root'
})
export class JobService {

  httpHeaders: HttpHeaders = new HttpHeaders({
    Authorization: environment.TOKEN
  })

  constructor(private httpClient:HttpClient) { }

  getAll():Observable<IJob[]>{
    return this.httpClient.get<IJob[]>(environment.API, {
      headers: this.httpHeaders
    })
  }

  getById(id: string):Observable<IJob> {
    return this.httpClient.get<IJob>(environment + '/' + id)
  }
}
