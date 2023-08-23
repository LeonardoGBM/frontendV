import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioAComponent } from './formulario-a.component';

describe('FormularioAComponent', () => {
  let component: FormularioAComponent;
  let fixture: ComponentFixture<FormularioAComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormularioAComponent]
    });
    fixture = TestBed.createComponent(FormularioAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
