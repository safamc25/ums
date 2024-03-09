import { Component, OnInit } from '@angular/core';
import { UserService } from '../userService/user.service';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';


@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {

  alluser: any = []
  userName: string = ""
  filterData: any = ""
  sortData:any=""
  p: number = 1;

  constructor(private us: UserService) {

  }
  ngOnInit(): void {
    this.getUsers()

  }

  changeSortData(){
    this.sortData="sort"
  }

  changeFilterData(data: any) {
    this.filterData = data
  }

  getUsers() {
    this.us.getUser().subscribe((data: any) => {
      this.alluser = data
      console.log(this.alluser);

    })
  }


  removeUser(id: any) {
    this.us.deleteUser(id).subscribe((result: any) => {
      alert('user removed')


      // to refresh
      this.getUsers()
    })
  }

  // to create pdf

  convertPdf(){
    let pdf=new jsPDF()


    // setting heading for table
    let head=[["User Id","Name","Email","Status"]]

    // setting body [{},{}..] convert to  [[],[]...]
    let body:any=[]
    this.alluser.forEach((i:any)=>{
      body.push([i.id,i.name,i.email,i.status==1?'Active':'Inactive'])
    })

    pdf.setFontSize(16)
    pdf.text("User Directory",10,10)   //to set heading to table 10 10  the position where to display x and y


    // table generate
    autoTable(pdf,{head,body})

    // open in new window
    pdf.output('dataurlnewwindow')

    // auto download
    pdf.save('userData.pdf')
  }

}
