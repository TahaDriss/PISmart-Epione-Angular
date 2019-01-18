/// <reference types="@types/googlemaps" />
import { Component, ElementRef, NgZone, OnInit, ViewChild } from '@angular/core';
import { DoctorService } from '../../services/doctor.service';
import { Doctor } from '../../models/Doctor';
import { Speciality } from '../../model/speciality';
import { AccueilService } from '../../services/accueil.service';
import { FormControl } from '@angular/forms';
import { MapsAPILoader } from '@agm/core';
declare var google: any;

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss'],
  providers: [DoctorService]
})
export class AccueilComponent implements OnInit {
  doctors: Doctor[];
  doctor: Doctor = new Doctor();
  specialities: Speciality[];
  public latitude: number;
  public longitude: number;
  public searchControl: FormControl;
  public zoom: number;

  @ViewChild('search')
  public searchElementRef: ElementRef;


  constructor(private doctorService: DoctorService, private accueilServ: AccueilService, private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone) { }

  ngOnInit() {
    this.accueilServ.getAllSpecialities().subscribe(data => this.specialities = data);
    // set google maps defaults
    this.zoom = 4;

    // create search FormControl
    this.searchControl = new FormControl();

    // set current position
    this.setCurrentPosition();

    // load Places Autocomplete
    this.mapsAPILoader.load().then(() => {
      const autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
        types: ['address']
      });
      autocomplete.addListener('place_changed', () => {
        this.ngZone.run(() => {
          // get the place result
          const place: google.maps.places.PlaceResult = autocomplete.getPlace();

          // verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }

          // set latitude, longitude and zoom
          this.doctor.latitude = place.geometry.location.lat().toString();
          console.log(this.doctor.latitude);
          this.doctor.longitude = place.geometry.location.lng().toString();
          this.zoom = 12;
        });
      });
    });
  }

  private setCurrentPosition() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.doctor.latitude = position.coords.latitude.toString();
        this.doctor.longitude = position.coords.longitude.toString();
        this.zoom = 12;
      });
    }
  }
}

