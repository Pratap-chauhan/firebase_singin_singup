import { Component, OnInit } from '@angular/core';
import  { NgForm }   from '@angular/forms' ;
import { Router } from '@angular/router';
import * as firebase from 'firebase'
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    console.log(firebase)
  }


login_submit(login:NgForm){
	const email =login.form.value.user_name;
  const password = login.form.value.password;
   firebase.auth().createUserWithEmailAndPassword(email , password).catch((data)=>{
console.log(data);
 this.router.navigateByUrl('');
 //2gHbB4Sg2tTPgTV(Af*u
   })
}


}
