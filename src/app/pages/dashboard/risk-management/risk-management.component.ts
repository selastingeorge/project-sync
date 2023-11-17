import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotImplementedComponent } from '../../../components/not-implemented/not-implemented.component';
import { PageHeaderComponent } from '../../../components/page-header/page-header.component';

@Component({
  selector: 'app-risk-management',
  standalone: true,
  imports: [CommonModule,NotImplementedComponent,PageHeaderComponent],
  templateUrl: './risk-management.component.html',
  styleUrl: './risk-management.component.scss'
})
export class RiskManagementComponent {

}
