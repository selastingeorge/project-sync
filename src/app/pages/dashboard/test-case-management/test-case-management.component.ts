import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotImplementedComponent } from '../../../components/not-implemented/not-implemented.component';
import { PageHeaderComponent } from '../../../components/page-header/page-header.component';

@Component({
  selector: 'app-test-case-management',
  standalone: true,
  imports: [CommonModule,NotImplementedComponent, PageHeaderComponent],
  templateUrl: './test-case-management.component.html',
  styleUrl: './test-case-management.component.scss'
})
export class TestCaseManagementComponent {

}
