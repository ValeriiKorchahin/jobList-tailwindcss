import { Component, OnInit } from '@angular/core';
import {IJob} from "../../models/IJob";
import {ActivatedRoute} from "@angular/router";
import {faAngleRight} from "@fortawesome/free-solid-svg-icons";
import {faAngleLeft} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.scss']
})
export class JobListComponent implements OnInit {

  vacancies: IJob[];

  page: number = 1;
  total: number;

  //icons
  next = faAngleRight;
  prev = faAngleLeft;

  constructor(private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({value}) => {
      this.vacancies = value;
    })
  }

}
