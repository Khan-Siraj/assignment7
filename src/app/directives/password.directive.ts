import { Directive } from '@angular/core';
import { AbstractControl, FormGroup, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';
@Directive({
  selector: '[appPassword]',
  providers:[{
    provide:NG_VALIDATORS,
    useClass:PasswordDirective,
    multi:true
  }]
})
export class PasswordDirective implements Validator {

  constructor() {    
  }
  validate(form: FormGroup): ValidationErrors | null {
    if(!form.controls.password || !form.controls.confirmPassword){
      return null;
    }
    if(form.controls.password.errors && form.controls.confirmPassword.errors){
      return null;
    }
    if(form.controls.password.value !== form.controls.confirmPassword.value){
      form.controls.confirmPassword.setErrors({matchPassword:true});
      return {matchPassword:true}
    }
    return null;
  }
}
