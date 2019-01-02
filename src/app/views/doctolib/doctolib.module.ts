import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { DoctolibComponent } from './doctolib.component';
import { DoctolibRoutingModule } from './doctolib-routing.module';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ProfileComponent } from './profile/profile.component';
import { NgxMapboxGLModule } from 'ngx-mapbox-gl';
import { CollapseModule } from 'ngx-bootstrap/collapse';

@NgModule({
  declarations: [DoctolibComponent, ProfileComponent],
  imports: [
    CommonModule,
    FormsModule,
    ChartsModule,
    TabsModule,
    BsDropdownModule,
    ButtonsModule.forRoot(),
    DoctolibRoutingModule,
    CollapseModule,
    NgxMapboxGLModule.withConfig({
      accessToken: 'pk.eyJ1IjoiY2FuY2lkYXMiLCJhIjoiY2pveThzczJxMjk0azNxbGgxcDJ3enE0ciJ9.6xUr69fkMw0vLHrpg4Hkuw'
    })
  ]
})
export class DoctolibModule { }
