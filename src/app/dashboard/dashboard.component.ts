import { Component, OnInit } from '@angular/core';
import { UserService } from '../users/userService/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent  implements OnInit {

  
  selected: Date | null=new Date();
  menuSlide:boolean=true
  userCount:any=0
  AdminUserName:any=""


// data to share child
  date:any=new Date()

  constructor(private us:UserService,private rout:Router){}

  ngOnInit(): void {
    this.us.getUser().subscribe((result:any)=>{
      this.userCount=result.length
    })

    this.AdminUserName=localStorage.getItem("userName")
  }
  menuClick(){
    this.menuSlide=!this.menuSlide
  }

  logout(){
    localStorage.removeItem("userName")
    this.rout.navigateByUrl("")

  }

  updateAdmin(event:any){
    this.AdminUserName=event
  }
}
