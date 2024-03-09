import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AdminService } from '../service/admin.service';
import { ToastService } from '../service/toast.service';

@Component({
  selector: 'app-admin-edit',
  templateUrl: './admin-edit.component.html',
  styleUrls: ['./admin-edit.component.css']
})
export class AdminEditComponent implements OnInit{

  admin:any={}
  fileData:any=""

  @Output() onAdminChange= new EventEmitter()

  // attribute to store data from parent
  @Input() data:any
 
  constructor(private as:AdminService, private toast:ToastService){}

  profilePic:any="https://i.postimg.cc/jjWLbYKp/dummy.jpg "

  editClicked:boolean=false
 
  ngOnInit(): void {
    this.as.loginApi().subscribe((result:any)=>{
      this.admin=result[0]
      if(this.admin.profile){
        this.profilePic=this.admin.profile
      }
    })
  
  }
  editClick(){
    this.editClicked=true
  }

  cancelEdit(){
    this.editClicked=false
  }

  getFile(event:any){
    let file=event.target.files[0]

    // url conversion
    let fr=new FileReader()

    // convert
    fr.readAsDataURL(file)

    // store the converted url (onload)
    fr.onload=(event:any)=>{
      console.log(event.target.result);

      // preview
      this.profilePic=event.target.result
      this.admin.profile=this.profilePic

      console.log(this.admin);
      
      
    }
  }

  editData(){
    this.as.updateAdmin(this.admin).subscribe((result:any)=>{
      console.log(result);

      // update localstorage with new username
      var indexE=result.email.indexOf('@')
      localStorage.setItem("userName",result.email.slice(0,indexE));
     
    //  event with target value (here it give username)
      this.onAdminChange.emit(result.email.slice(0,indexE))
      

      this.cancelEdit()
      this.toast.showSuccess('Profile Updated')
      
    })
  }

}
