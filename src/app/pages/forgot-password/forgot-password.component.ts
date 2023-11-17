import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthLayoutComponent } from '../../layouts/auth-layout/auth-layout.component';
import { FormBuilder, ReactiveFormsModule, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { AuthServiceService } from '../../services/auth/auth-service.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
	selector: 'app-forgot-password',
	standalone: true,
	imports: [CommonModule, ReactiveFormsModule, AuthLayoutComponent],
	templateUrl: './forgot-password.component.html',
	styleUrl: './forgot-password.component.scss'
})
export class ForgotPasswordComponent {

	public forgotPasswordForm!: FormGroup
	public submitted = false;
	public emailSend = false;

	constructor(private formBuilder: FormBuilder, private auth: AngularFireAuth) {

	}

	get controls(): { [key: string]: AbstractControl } {
		return this.forgotPasswordForm.controls;
	}


	ngOnInit(): void {
		this.forgotPasswordForm = this.formBuilder.group({
			email: ['', [Validators.required, Validators.email]],
		});
	}

	onSubmit(): void {
		this.submitted = true;
		if (this.forgotPasswordForm.invalid) {
			return;
		}
		else {
			const { email } = this.forgotPasswordForm.value;
			console.log(email)
			this.auth.fetchSignInMethodsForEmail(email).then((signInMethods)=>{
				console.log(signInMethods.length);
				if(signInMethods.length>0)
				{
					this.auth.sendPasswordResetEmail(email).then(() => {
						this.emailSend = true;
					}).catch((error) => {
						this.emailSend = false;
						this.forgotPasswordForm.setErrors({
							forgotPasswordError:error.message
						});
					})
				}
				else
				{
					this.emailSend = false;
					this.forgotPasswordForm.setErrors({
						forgotPasswordError:"Sorry, An account with this email does not exist."
					});
				}
			}).catch((error)=>{
				this.emailSend = false;
				this.forgotPasswordForm.setErrors({
					forgotPasswordError:error.message
				});
			})
			
		}
	}

}