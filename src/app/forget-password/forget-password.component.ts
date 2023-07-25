import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {
  updateUser: any;
  updatePassword: any;
  local: any;
  userList: any[] = []

  constructor(private router: Router) { }

  ngOnInit(): void {
    const local = localStorage.getItem('usersarray')
    localStorage.setItem('isLoggedIn', 'false')
    if (local != null) {
      this.userList = JSON.parse(local)
    }
    // console.log(this.userList)
  }

  password(e: any) {
    const userExist = this.userList.findIndex((m: { newuser: string; newpassword: string; }) => m.newuser == this.updateUser);
    if (userExist == -1) {
      alert('Wrong Username')
    } else {
      let result = e.validationGroup.validate();
      if (result.isValid) {

        this.userList[userExist].newpassword = this.updatePassword
        localStorage.setItem('usersarray', JSON.stringify(this.userList))
        this.router.navigate(["/login"]);
      }
    }



  }

}
