import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {IJob} from "../models/IJob";

@Injectable({
  providedIn: 'root'
})
export class JobService {

  httpHeaders: HttpHeaders = new HttpHeaders({
    Authorization: 'Bearer wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu'
  })

  constructor(private httpClient:HttpClient) { }

  getAll():Observable<IJob[]>{
    return this.httpClient.get<IJob[]>("https://api.json-generator.com/templates/ZM1r0eic3XEy/data", {
      headers: this.httpHeaders
    })
  }

  getById(id: string):Observable<IJob> {
    return this.httpClient.get<IJob>('https://api.json-generator.com/templates/ZM1r0eic3XEy/data' + '/' + id)
  }
}
