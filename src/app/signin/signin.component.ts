import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit{

  loginUsers:any[]=[]
  val_username:any=''
  val_password:any=''
  constructor(private toasterService: ToastrService,private router:Router) { }
  ngOnInit():void{
    const localdata=localStorage.getItem('usersarray')
    localStorage.setItem('isLoggedIn','false')
    if(localdata!=null){
      this.loginUsers=JSON.parse(localdata)
    }
    
    
  }
  login():void{
    const isUserExist = this.loginUsers.find((m: { newuser: string; newpassword: string; }) => m.newuser==this.val_username && m.newpassword==this.val_password);
    localStorage.setItem('loginname',this.val_username)
    if(isUserExist!=undefined){
      localStorage.setItem('isLoggedIn','true')

      this.toasterService.success('Logged in Successfully!!');
      this.router.navigate(["/home"]);
      
    }else{
      // localStorage.setItem('isLoggedIn','false')
      this.toasterService.error('Invalid Credentials');
    }

  }

}
