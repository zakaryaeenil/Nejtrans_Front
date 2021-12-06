import {User} from "./user";

export class Event {
  id : number;
  startDate : Date;
  endDate : Date;
  description : string;
  title : string;
  eventUser : User;
}
