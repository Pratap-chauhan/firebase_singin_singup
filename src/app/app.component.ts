import { Component  , OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

ngOnInit()
{
  firebase.initializeApp({

      apiKey: "AIzaSyC2ZaxkR7_HXe4OH7ib_UUB2KFjzeZYiXU",
      authDomain: "fir-demo-d6444.firebaseapp.com",
      databaseURL: "https://fir-demo-d6444.firebaseio.com",
      projectId: "fir-demo-d6444",
      storageBucket: "fir-demo-d6444.appspot.com",
      messagingSenderId: "49568247064"
    
    })
}


}
