import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(allUsersArray:any[],filterStatus:string): any {
    
    // const result:any=[]

    if(!allUsersArray || !filterStatus){
      return allUsersArray
    }
    else{

      return allUsersArray.filter((item:any)=>item.status==filterStatus)

    //   allUsersArray.forEach((item:any)=>{
    //     if(item.status==filterStatus){
    //       result.push(item)
    //     }
    //   })
    //   return result
    }
  }

}
