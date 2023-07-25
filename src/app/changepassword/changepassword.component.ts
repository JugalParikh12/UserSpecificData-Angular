import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent implements OnInit {
  updateYourUser: any;
  updateOldPassword: any
  updateNewPassword: any
  newList: any[] = []

  constructor(private router: Router) { }

  ngOnInit(): void {
    const local = localStorage.getItem('usersarray')
    localStorage.setItem('isLoggedIn', 'false')
    if (local != null) {
      this.newList = JSON.parse(local)
    }

  }

  updatePassword(e: any) {
    const userExist = this.newList.findIndex((m: { newuser: string; newpassword: string; }) => m.newuser == this.updateYourUser && m.newpassword == this.updateOldPassword);
    if (userExist == -1) {
      alert('Wrong Username')
    }
    else {
      let result = e.validationGroup.validate();
      if (result.isValid) {

        this.newList[userExist].newpassword = this.updateNewPassword

        localStorage.setItem('usersarray', JSON.stringify(this.newList))
        this.router.navigate(["/login"]);
      }
    }
  }
}
