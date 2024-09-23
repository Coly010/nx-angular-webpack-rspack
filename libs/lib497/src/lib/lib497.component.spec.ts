import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib497Component } from './lib497.component';

describe('Lib497Component', () => {
  let component: Lib497Component;
  let fixture: ComponentFixture<Lib497Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib497Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib497Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
