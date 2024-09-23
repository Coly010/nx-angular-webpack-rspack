import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib549Component } from './lib549.component';

describe('Lib549Component', () => {
  let component: Lib549Component;
  let fixture: ComponentFixture<Lib549Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib549Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib549Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
