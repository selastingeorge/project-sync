import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditManagementComponent } from './audit-management.component';

describe('AuditManagementComponent', () => {
  let component: AuditManagementComponent;
  let fixture: ComponentFixture<AuditManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuditManagementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AuditManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
