import { Component, OnInit ,ElementRef} from '@angular/core';
import { Router } from '@angular/router';
import  { NgForm }   from '@angular/forms' ;
import { ToastrService } from 'ngx-toastr';
import * as firebase from 'firebase';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  constructor(private router: Router,private toastr: ToastrService) { }
email;
password;


  ngOnInit() {


    }

login_submit(login:NgForm)
{
  const email =login.form.value.user_name;
  const password = login.form.value.password;
  console.log(email,password);
 this.router.navigateByUrl('/dashboard');
    firebase.auth().signInWithEmailAndPassword(email , password).then(
    Response=>{console.log(Response);
      }  )
.catch(reason =>
  {
    this.toastr.error('everything is broken','wsygrthrhy');
  })  
 firebase.auth().createUserWithEmailAndPassword(email ,this.password).catch( Error => console.log(Error) )
}
signUp(){
  this.router.navigateByUrl('');
}






}