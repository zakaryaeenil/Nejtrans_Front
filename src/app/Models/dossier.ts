import {User} from "./user";


export class Dossier {
  id : number;
  typeDossier : string;
  nb_documents : number;
  available : number;
  employeeUsername : string ;
  etat : string;
  documents : Document;
  createdAt : Date;
  user : User;
}
