import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib502Component } from './lib502.component';

describe('Lib502Component', () => {
  let component: Lib502Component;
  let fixture: ComponentFixture<Lib502Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib502Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib502Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
