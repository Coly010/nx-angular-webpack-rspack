import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib253Component } from './lib253.component';

describe('Lib253Component', () => {
  let component: Lib253Component;
  let fixture: ComponentFixture<Lib253Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib253Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib253Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
