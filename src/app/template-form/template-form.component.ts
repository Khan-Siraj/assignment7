import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  showData:boolean=false;
  checked:boolean=false;
  visibility:boolean=false;
  cVisibility:boolean=false;
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(userForm:NgForm):void{
    console.log(userForm.getControl.name)
    this.showData=true;
  }
}
