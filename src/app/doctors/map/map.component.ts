import { Component, OnInit } from '@angular/core';
declare let L;


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const map = L.map('map').setView([51.505, -0.09], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
  }

  Maps() {

    const map = L.map('map').setView([51.505, -0.09], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      id: 'mapbox.streets-v10',
      accessToken: 'pk.eyJ1IjoiZmFyZXNsbGxsbGxsbGxsbGxsbGwiLCJhIjoiY2pveWQ0eW84MHhpZzNxcGN6bzFnZGRmbyJ9.J4K4Ssfq1rAHo4BUdH7bDQ'
    }).addTo(map);

    L.marker([51.505, -0.09]).addTo(map)
        .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
        .openPopup();
  }
}
