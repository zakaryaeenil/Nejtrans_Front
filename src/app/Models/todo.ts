import {User} from "./user";

export class Todo {
  id : number;
  description : string;
  title : string;
  createdAt : Date;
  type : string;
  user : User;

}
