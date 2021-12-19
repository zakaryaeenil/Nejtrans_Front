import {Dossier} from "./dossier";
import {Byte} from "@angular/compiler/src/util";

export class Document {
   id  : number
   name : string;
  typeDocument : string;
   uploadDate : Date;
   content : Byte[];
   dossier : Dossier;
}
