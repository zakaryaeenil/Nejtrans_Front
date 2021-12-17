import {Role} from "./role";
import {Dossier} from "./dossier";


export class User {
   id : number;
   firstName : string;
   lastName : string;
   username : string;
   address : string ;
  enabled : boolean;
  telephone : string;
  countDossiers : number;
  countReservations : number;
   email : string;
   password :string;
  createdAt : Date;
   roles : Role;
  dossier : Dossier;

}
