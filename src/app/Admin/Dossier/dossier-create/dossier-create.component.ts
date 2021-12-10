import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  encapsulation : ViewEncapsulation.None,
  selector: 'app-dossier-create',
  templateUrl: './dossier-create.component.html',
  styleUrls: ['./dossier-create.component.css']
})
export class DossierCreateComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


}
