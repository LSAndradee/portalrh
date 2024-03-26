import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtestadoComponent } from './atestado.component';

describe('AtestadoComponent', () => {
  let component: AtestadoComponent;
  let fixture: ComponentFixture<AtestadoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AtestadoComponent]
    });
    fixture = TestBed.createComponent(AtestadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
