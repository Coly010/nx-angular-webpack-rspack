import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib669Component } from './lib669.component';

describe('Lib669Component', () => {
  let component: Lib669Component;
  let fixture: ComponentFixture<Lib669Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib669Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib669Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
