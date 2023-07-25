import { Component } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent {
  usersarray: any = []
  usersObj: any = {
    newuser: '',
    newpassword: ''

  }


  constructor(private router: Router) { }

  ngOnInit(): void {

    const localdata = localStorage.getItem('usersarray')
    if (localdata != null) {
      this.usersarray = JSON.parse(localdata)
    }

  }
  register(e: any) {

    const isUserExist = this.usersarray.findIndex((m: { newuser: string; newpassword: string; }) => m.newuser == this.usersObj.newuser);
    if (isUserExist == -1) {
      let result = e.validationGroup.validate();
      if (result.isValid) {
        // Submit values to the server
        let x = localStorage.getItem('usersarray')
        if (x != null) {
          this.usersarray = JSON.parse(x)
        }


        this.usersarray.push(this.usersObj)

        localStorage.setItem('usersarray', JSON.stringify(this.usersarray))
        this.router.navigate(["/login"]);
      }

    }
    else {
      alert('Username already exist!!')
    }



  }


}
