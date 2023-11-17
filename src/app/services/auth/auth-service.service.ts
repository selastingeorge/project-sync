import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})

export class AuthServiceService {

	public user: any;

	constructor(private auth: AngularFireAuth, private router: Router, private formBuilder: FormBuilder) { }

	signIn(email: string, password: string, loginForm: FormGroup): Promise<void> {
		return this.auth.signInWithEmailAndPassword(email, password).then((userCredential) => {
			this.user = userCredential.user;
			this.router.navigate(['/dashboard/project-management']);
		}).catch((error) => {
			const errorMessage = this.getErrorMessage(error)

			loginForm.setErrors({
				loginError: errorMessage,
			});
		});
	}

	signUp(email: string, password: string, signUpForm: FormGroup): Promise<void> {
		return this.auth.createUserWithEmailAndPassword(email, password).then((userCredential) => {
			this.user = userCredential.user;
			this.router.navigate(['/dashboard/project-management']);
		}).catch((error) => {
			const errorMessage = this.getErrorMessage(error)

			signUpForm.setErrors({
				signUpError: errorMessage,
			});
		});
	}


	getErrorMessage(error:any):string
	{
		let errorMessage = error.message;
		let errorCode = error.code;

		switch (errorCode) {
			case 'auth/wrong-password':
				errorMessage = 'Incorrect password. Please try again';
				break;
			case 'auth/invalid-login-credentials':
				errorMessage = 'Invalid login credentials. Please try again';
				break;
			case 'auth/weak-password':
				errorMessage = 'The password is too weak, please choose a password with letters, numbers & symbols';
				break;
			default:
				errorMessage = "";
		}

		return errorMessage;
	}
}
