import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthLayoutComponent } from '../../layouts/auth-layout/auth-layout.component';
import { FormBuilder, ReactiveFormsModule, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { AuthServiceService } from '../../services/auth/auth-service.service';

@Component({
	selector: 'app-sign-in',
	standalone: true,
	imports: [CommonModule, ReactiveFormsModule, AuthLayoutComponent],
	templateUrl: './sign-in.component.html',
	styleUrl: './sign-in.component.scss'
})
export class SignInComponent {

	public loginForm!: FormGroup
	public submitted = false;

	constructor(private formBuilder: FormBuilder, private authService: AuthServiceService) {

	}

	get controls(): { [key: string]: AbstractControl } {
		return this.loginForm.controls;
	}


	ngOnInit(): void {
		this.loginForm = this.formBuilder.group({
			email: ['', [Validators.required,Validators.email]],
			password: ['', Validators.required]
		});
	}

	onSubmit(): void {
		this.submitted = true;
		if (this.loginForm.invalid) {
			return;
		}
		else {
			const { email, password } = this.loginForm.value;
			this.authService.signIn(email, password, this.loginForm);
		}
	}

}
