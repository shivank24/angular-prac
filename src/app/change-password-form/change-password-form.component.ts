import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PasswordValidators } from './password.validators';

@Component({
  selector: 'change-password-form',
  templateUrl: './change-password-form.component.html',
  styleUrls: ['./change-password-form.component.css']
})
export class ChangePasswordFormComponent {
  form = new FormGroup({
    oldPassword: new FormControl('',[
      Validators.required
    ],
        PasswordValidators.compareOldPassword),
    newPassword: new FormControl('',[
      Validators.required
    ]),
    confirmPassword: new FormControl('',[
      Validators.required
    ])
  },{
    validators: PasswordValidators.matchPassword
  })

  get oldPassword(){
    return this.form.get("oldPassword")
  }

  get newPassword(){
    return this.form.get("newPassword")
  }

  get confirmPassword(){
    return this.form.get('confirmPassword')
  }

  log(){
    console.log(this.form)
  }

}
