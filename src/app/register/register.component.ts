import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent{
  usersarray:any=[]
  usersObj:any={
    newuser:'',
    newpassword:''

  }
  x: any;

  
  constructor(private router:Router){}
  
  ngOnInit():void{

  }
  register():void{
    
    this.x=localStorage.getItem('usersarray')
    if(this.x!=null){
      this.usersarray=JSON.parse(this.x)
    }
    

    this.usersarray.push(this.usersObj)

    localStorage.setItem('usersarray',JSON.stringify(this.usersarray))
    this.usersObj={
      newuser:'',
      newpassword:''
  
    }
  
    
    this.router.navigate(["/login"]);
  }
  
  
}
