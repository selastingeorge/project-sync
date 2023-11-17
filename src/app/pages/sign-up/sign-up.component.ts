import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthLayoutComponent } from '../../layouts/auth-layout/auth-layout.component';
import { FormBuilder, ReactiveFormsModule, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { AuthServiceService } from '../../services/auth/auth-service.service';
import { passwordMatchValidator } from '../../validators/password-match.validator'


@Component({
	selector: 'app-sign-up',
	standalone: true,
	imports: [CommonModule, ReactiveFormsModule, AuthLayoutComponent],
	templateUrl: './sign-up.component.html',
	styleUrl: './sign-up.component.scss'
})
export class SignUpComponent {

	public signupForm!: FormGroup
	public submitted = false;

	constructor(private formBuilder: FormBuilder, private authService: AuthServiceService) {

	}

	get controls(): { [key: string]: AbstractControl } {
		return this.signupForm.controls;
	}


	ngOnInit(): void {
		this.signupForm = this.formBuilder.group({
			email: ['', [Validators.required, Validators.email]],
			password: ['', Validators.required],
			confirmPassword: ['', [Validators.required]],
			tnc: ['', [Validators.required]]
		},
		{
			validators: passwordMatchValidator
		});
	}

	onSubmit(): void {
		this.submitted = true;
		if (this.signupForm.invalid) {
			console.log(this.signupForm.errors)
			return;
		}
		else {
			const { email, password } = this.signupForm.value;
			this.authService.signUp(email, password, this.signupForm);
		}
	}

}
