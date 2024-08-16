import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function controlValidator(pattern: string): ValidatorFn{
    return (control: AbstractControl): ValidationErrors | null =>{
        const result  = new RegExp(pattern).test(control.value);
        return result ? null : {pattern: {value: control.value}};
    }
}
export function orderFormValidator(control: AbstractControl): ValidationErrors | null {
    const name = control.get('name');
    const lastname = control.get('lastname');
    const phone = control.get('phone');
    const country = control.get('country');
    const zip = control.get('index');
    const product = control.get('product');
    const address = control.get('address');
    //const comment: string = control.get('comment');
    return name?.value && lastname?.value && phone?.value && country?.value && zip?.value && product?.value && address?.value ? null :  {orderFormInvalid: true}
}

