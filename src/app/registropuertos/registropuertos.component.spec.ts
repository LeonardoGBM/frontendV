import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistropuertosComponent } from './registropuertos.component';

describe('RegistropuertosComponent', () => {
  let component: RegistropuertosComponent;
  let fixture: ComponentFixture<RegistropuertosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistropuertosComponent]
    });
    fixture = TestBed.createComponent(RegistropuertosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
