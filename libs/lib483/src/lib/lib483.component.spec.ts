import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib483Component } from './lib483.component';

describe('Lib483Component', () => {
  let component: Lib483Component;
  let fixture: ComponentFixture<Lib483Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib483Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib483Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
