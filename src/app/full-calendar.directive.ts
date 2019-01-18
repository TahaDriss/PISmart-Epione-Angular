import { Directive, Input, AfterViewInit, ElementRef } from '@angular/core';
import * as $ from 'jquery';
@Directive({
  selector: '[fullCalendar]',
  exportAs:'fullCalendar'
})
export class FullCalendarDirective {
  @Input('config') config: Object = {};
  defaultConfig : Object = {
    header: {
      left: 'prev,next today',
      center: 'title',
      right: 'month,basicWeek,basicDay'
    },
    editable: true,
    eventLimit: true, // allow "more" link when too many events
    navLinks: true,
  }
  constructor(private el: ElementRef) { }
  ngAfterViewInit()
  {
    (<any>Object).assign(this.defaultConfig, this.config);
    $(this.el.nativeElement).fullCalendar(this.defaultConfig);
  }
}