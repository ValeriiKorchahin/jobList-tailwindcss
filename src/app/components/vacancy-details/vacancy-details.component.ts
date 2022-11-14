import {Component, OnInit} from '@angular/core';
import {faBookmark} from "@fortawesome/free-regular-svg-icons";
import {faShareNodes} from "@fortawesome/free-solid-svg-icons";
import {ActivatedRoute} from "@angular/router";
import {IJob} from "../../models/IJob";
import {faLocationDot} from "@fortawesome/free-solid-svg-icons";
import {faAngleLeft} from "@fortawesome/free-solid-svg-icons";


@Component({
  selector: 'app-vacancy-details',
  templateUrl: './vacancy-details.component.html',
  styleUrls: ['./vacancy-details.component.scss']
})
export class VacancyDetailsComponent implements OnInit {

  location = faLocationDot;
  bookmark = faBookmark;
  share = faShareNodes;
  return = faAngleLeft;

  position: object;
  zoom = 12;
  center: google.maps.LatLngLiteral;
  options: google.maps.MapOptions = {
    mapTypeId: 'hybrid',
    zoomControl: false,
    scrollwheel: false,
    disableDoubleClickZoom: true,
    maxZoom: 15,
    minZoom: 8,
  };

  vacancy: IJob

  constructor(private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({value}) => {
      this.vacancy = value[0]
    })

    this.center.lat = this.vacancy.location.lat;
    this.center.lng = this.vacancy.location.long;

    this.position = {
      lat: this.center.lat,
      lng: this.center.lng
    }
  }

  previousPage() {
    history.back()
  }

}
