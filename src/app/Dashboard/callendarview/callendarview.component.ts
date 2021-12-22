import {Component, OnInit, TemplateRef, ViewChild, ViewEncapsulation} from '@angular/core';
import {CalendarEvent, CalendarView} from 'angular-calendar';
import {isSameDay, isSameMonth} from 'date-fns';
import {DashboardService} from "../../Services/dashboard.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  encapsulation : ViewEncapsulation.None,
  selector: 'app-callendarview',
  templateUrl: './callendarview.component.html',
  styleUrls: ['./callendarview.component.css']
})
export class CallendarviewComponent implements OnInit {
  public book : any;
  events: Array<CalendarEvent<{ time: any }>> = [];
  viewDate: Date = new Date();
  view: CalendarView = CalendarView.Month;
  CalendarView = CalendarView;
  activeDayIsOpen: boolean = true;
  modalData: {
    action: string;
    event: CalendarEvent;
  };
  constructor( private service : DashboardService ,private  modal :NgbModal) {
  }

  @ViewChild('modalContent', { static: true }) modalContent: TemplateRef<any>;

  handleEvent(action: string, event: CalendarEvent): void {
    this.modalData = { event, action };
    this.modal.open(this.modalContent, { size: 'lg' });
  }

  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    if (isSameMonth(date, this.viewDate)) {
      this.activeDayIsOpen = !((isSameDay(this.viewDate, date) && this.activeDayIsOpen) ||
        events.length === 0);
      this.viewDate = date;
    }
  }
  ngOnInit(): void {
    this.getevents();
  }
  getevents(){

    this.service.getEvents().subscribe(data =>{
      this.book = data;
      for (let x of this.book) {
        this.events = [
          ...this.events,
          {
            start:new Date(x.startDate),
            end:new Date(x.endDate),
            title :"Date Debut Title : " +x.title+" Description :"+x.description + "User : "+x.eventUser.username ,
          }
        ]
      }
    });

  }


  setView(view: CalendarView) {
    this.view = view;
  }

  closeOpenMonthViewDay() {
    this.activeDayIsOpen = false;
  }


}
