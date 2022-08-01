import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from "@angular/forms";
import { select, Store } from "@ngrx/store";
// import { registerAction } from "../../store/actions/register.action";
import { Observable } from "rxjs";
// import { isSubmittingSelector } from "../../store/selector";
// import {AuthService} from "../../services/auth.service";
// import {CurrentUserInterface} from "../../../sared/types/currentUser.interface";
// import {RegisterRequestInterface} from "../../../sared/types/registerRequest.interface";

@Component({
  selector: 'mc-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form?: UntypedFormGroup;
  isSubmitting$?: Observable<boolean>

  constructor(private fb: UntypedFormBuilder, private store: Store) {
  }

  ngOnInit(): void {
    this.initializeForm()
    // this.initializeValues()
  }

  initializeForm(): void {
    this.form = this.fb.group({
      username: ['', Validators.required,Validators.minLength(5)],
      email: '',
      password: ''
    })
  }

  // onSubmit(event: any): void{
  //   event.preventDefault()
  //   console.log('value:', this.form?.value)
  //   const request: RegisterRequestInterface = {
  //     user: this.form?.value
  //   }
  //   this.store.dispatch(registerAction({ request }))
  // }
  //
  // private initializeValues(): void {
  //   this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector))
  // }
}
