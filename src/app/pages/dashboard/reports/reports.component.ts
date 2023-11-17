import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotImplementedComponent } from '../../../components/not-implemented/not-implemented.component';
import { PageHeaderComponent } from '../../../components/page-header/page-header.component';

@Component({
  selector: 'app-reports',
  standalone: true,
  imports: [CommonModule,NotImplementedComponent,PageHeaderComponent],
  templateUrl: './reports.component.html',
  styleUrl: './reports.component.scss'
})
export class ReportsComponent {

}
