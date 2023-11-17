import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule, JsonPipe } from '@angular/common';
import { transition, trigger, style, animate } from '@angular/animations';

@Component({
	selector: 'app-new-project-dialog',
	standalone: true,
	imports: [CommonModule, JsonPipe],
	templateUrl: './new-project-dialog.component.html',
	styleUrl: './new-project-dialog.component.scss',
})
export class NewProjectDialogComponent {

	@Input() step: number = 1
	@Output() onDialogCloseRequested = new EventEmitter<boolean>();

	public technologies: string[] = [
		"Node Js",
		"React Js",
		"Mongo DB",
		"Power BI"
	]

	steps = {
		data: [
			{
				completed: false,
				skipped: false
			},
			{
				completed: false,
				skipped: false
			},
			{
				completed: false,
				skipped: false
			},
			{
				completed: false,
				skipped: false
			},
			{
				completed: false,
				skipped: false
			},
			{
				completed: false,
				skipped: false
			},
		],
		active: 1
	};


	closeDialog() {
		this.onDialogCloseRequested.emit(true);
	}

	goBack() {
		if (this.step != 1) {
			this.step--;
			this.steps.active = this.step;
			this.steps.data[this.step - 1].skipped = false;
		}
	}

	goNext() {
		if (this.step != 6) {
			this.steps.data[this.step - 1].completed = true;
			this.steps.data[this.step - 1].skipped = false;
			this.step++;
			this.steps.active = this.step;
		}
	}

	skip() {
		if (this.step != 6) {
			this.steps.data[this.step - 1].completed = false;
			this.steps.data[this.step - 1].skipped = true;
			this.step++;
			this.steps.active = this.step;
		}
	}


	addTechnology(e:KeyboardEvent) {
		if (e.key === 'Enter') {
			let input: HTMLInputElement = document.getElementById('tech') as HTMLInputElement;
			console.log(input.value)
			if (input.value.length > 0 && !(this.technologies.length>5)) {
				if (!this.technologies.includes(input.value)) {
					this.technologies.push(input.value);
					input.value="";
				}
			}
		}
		
	}

	removeTechnology(t:string)
	{
		const index = this.technologies.indexOf(t);
		const positionToRemove: number = index;
		this.technologies.splice(positionToRemove, 1);
	}
}
