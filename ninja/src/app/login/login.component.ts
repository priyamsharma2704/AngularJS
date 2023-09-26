import { Component } from '@angular/core';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
    constructor()
    {

    }

    ngOnInit(): void {
        const localData = localStorage.getItem("signupUsers");
        if(localData)
        {
            this.users = JSON.parse(localData);
        }
    }

    localstorage = localStorage;

    signinObj: any={
      username:"",
      password:""
    }
    signupObj:any={
      username:"",
      password:"",
      password2:"",
      email:""
    }

    users:any[]=[];

    signin()
    {
        const userExists = this.users.find(user=>user.username === this.signinObj.username);
        
        if(userExists)
            alert("user logged in successfully");
        else
            alert("user does not exist");
    }

    signup()
    {
        if(this.signupObj.password !== this.signupObj.password2)
        {
            alert("Passwords do not match");
            return;
        }
        this.users.push(this.signupObj);
        //add this user to localstorage
        this.localstorage.setItem("signupUsers", JSON.stringify(this.users));

        //reset the signup obj
        this.signupObj={
            username:"",
            password:"",
            password2:"",
            email:""
          }
    }
}
