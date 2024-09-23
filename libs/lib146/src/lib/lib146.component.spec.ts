import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib146Component } from './lib146.component';

describe('Lib146Component', () => {
  let component: Lib146Component;
  let fixture: ComponentFixture<Lib146Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib146Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib146Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
