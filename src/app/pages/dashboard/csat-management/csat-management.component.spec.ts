import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsatManagementComponent } from './csat-management.component';

describe('CsatManagementComponent', () => {
  let component: CsatManagementComponent;
  let fixture: ComponentFixture<CsatManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CsatManagementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CsatManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
