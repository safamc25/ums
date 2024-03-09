import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl=('https://umsserver-1.onrender.com')

  constructor(private http:HttpClient) { }

  // adduser Api

  addUser(bodyData:any){
   return this.http.post(`${this.baseUrl}/users`,bodyData)
  }

  // alluser Api

  getUser(){
   return this.http.get(`${this.baseUrl}/users`)
  }

  // delete user

  deleteUser(id:any){
    return this.http.delete(`${this.baseUrl}/users/${id}`)
  }


  // acces single user

  getUserData(uid:any){
  return this.http.get(`${this.baseUrl}/users/${uid}`)
  }

  // update user data
  UpdateUser(id:any,bodyData:any){
    return this.http.put(`${this.baseUrl}/users/${id}`,bodyData)
  }

}
