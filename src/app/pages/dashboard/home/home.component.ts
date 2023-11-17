import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotImplementedComponent } from '../../../components/not-implemented/not-implemented.component';
import { PageHeaderComponent } from '../../../components/page-header/page-header.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,NotImplementedComponent, PageHeaderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
