import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib137Component } from './lib137.component';

describe('Lib137Component', () => {
  let component: Lib137Component;
  let fixture: ComponentFixture<Lib137Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib137Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib137Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
