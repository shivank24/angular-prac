import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export class PasswordValidators {

    static compareOldPassword(control: AbstractControl): Promise<ValidationErrors | null>{
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                if (control.value != '1234')
                    resolve({passwordMatch: false})
                else resolve(null)
            },2000)
        })
    }

    static matchPassword(control: AbstractControl){
        let newPassword = control.get("newPassword")
        let confirmPassword = control.get("confirmPassword")

        if (newPassword?.value !== confirmPassword?.value)
            return {passwordShouldMatch: true}
        return null
    }
}