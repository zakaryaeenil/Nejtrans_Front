import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ProfileService} from "../Services/profile.service";

@Component({
  encapsulation : ViewEncapsulation.None,
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profile : any;

  constructor(private service : ProfileService) { }

  ngOnInit(): void {
    this.service.getCurrentUser().subscribe(data =>{
      this.profile = data;
    })
  }

}
