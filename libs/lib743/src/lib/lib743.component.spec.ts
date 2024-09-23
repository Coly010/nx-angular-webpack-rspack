import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib743Component } from './lib743.component';

describe('Lib743Component', () => {
  let component: Lib743Component;
  let fixture: ComponentFixture<Lib743Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib743Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib743Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
