import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib510Component } from './lib510.component';

describe('Lib510Component', () => {
  let component: Lib510Component;
  let fixture: ComponentFixture<Lib510Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib510Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib510Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
