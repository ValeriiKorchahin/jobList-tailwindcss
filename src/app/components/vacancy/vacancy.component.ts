import {Component, Input, OnInit} from '@angular/core';
import {IJob} from "../../models/IJob";
import {faLocationDot} from "@fortawesome/free-solid-svg-icons";
import {faBookmark} from "@fortawesome/free-regular-svg-icons";

@Component({
  selector: 'app-vacancy',
  templateUrl: './vacancy.component.html',
  styleUrls: ['./vacancy.component.scss']
})
export class VacancyComponent implements OnInit {

  //icons
  location = faLocationDot;
  bookMark = faBookmark;

  @Input()
  vacancy: IJob;
  date: Date;
  currentDate: Date;
  createdAt: number;

  constructor() { }

  ngOnInit(): void {
    this.date = new Date(this.vacancy.createdAt);
    this.currentDate = new Date();
    this.createdAt = this.currentDate.getFullYear() - this.date.getFullYear()
  }

}
