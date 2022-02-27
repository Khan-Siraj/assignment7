import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  showData:boolean=false;
  checked:boolean=false;
  visibility:boolean=false;
  cVisibility:boolean=false;
  userForm = this.fb.group({
    fullname:['',[Validators.required,Validators.pattern('[a-zA-ZW -]*')]],
    email:['',[Validators.required,Validators.email]],
    mobile:['',[
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(12),
      Validators.pattern('[0-9]*'),
    ],],
    password:['',[Validators.required, Validators.minLength(6)]],
    confirmPassword:['',[Validators.required, Validators.minLength(6)]]
  })
  constructor(private fb:FormBuilder) { }

  get fullname(){
    return this.userForm.get('fullname')
  }
  get email(){
    return this.userForm.get('email')
  }
  get mobile(){
    return this.userForm.get('mobile')
  }
  get password(){
    return this.userForm.get('password')
  }
  get confirmPassword(){
    return this.userForm.get('confirmPassword')
  }
  ngOnInit(): void {
  }
  onSubmit():void{
    console.log(this.userForm.valid);
    console.log(this.userForm.value)
    this.showData=true;
  }
}
