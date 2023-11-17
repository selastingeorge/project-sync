import { Component, Input } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

@Component({
	selector: 'app-project-card',
	standalone: true,
	imports: [CommonModule,DatePipe],
	templateUrl: './project-card.component.html',
	styleUrl: './project-card.component.scss'
})
export class ProjectCardComponent {
	@Input() title:string = "Project Title";
	@Input() status:string = "Active";
	@Input() startDate:string = "03-13-2021";
	@Input() tasks:string = "0";
	@Input() users:string = "0";
	@Input() members:{ online:boolean, photo:string }[] = [];
	@Input() progress:string = "0";

}
