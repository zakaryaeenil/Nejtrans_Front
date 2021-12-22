import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {AuthService} from "../../Login/auth.service";
import {NotifService} from "../../Services/notif.service";
import {Notification} from "../../Models/notification";


@Component({
  encapsulation : ViewEncapsulation.None,
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  Notifs : Notification[];
  public err= 0;
  constructor(public Auth : AuthService , private service : NotifService){
  }
  ngOnInit() {
    this.getAll();
  }

  onLogout() {
    this.Auth.logout();
  }
  getAll(){
    var count = 0;
   this.service.getAllNotif().subscribe(data => {
     this.Notifs = data;
     this.Notifs.map(function (elem){
       if(elem.read == false){
         count= count+1
       }
     })
     if (count != 0){
       this.err = 1;
     }
   })
  }
  onRead(id : number){
    console.log(id);
    this.service.OnRead(id).subscribe(data =>{
      setTimeout(() => {
        window.location.reload();
        // And any other code that should run only after 5s
      }, 2000);
    });
  }
}
