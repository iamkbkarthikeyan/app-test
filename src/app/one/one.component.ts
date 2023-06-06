import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AppComponent } from '../app.component';
 

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent implements OnInit {

  constructor(public myapp: AppComponent) { }


  ngOnInit() {
    this.myapp.userFormData = new FormGroup({
      username: new FormControl(''),
      password: new FormControl(''),
    });
  }


  onClickSubmit(form: FormGroup){
      console.log('Username', form.value.username);
      console.log('Password', form.value.password);
  }

}
