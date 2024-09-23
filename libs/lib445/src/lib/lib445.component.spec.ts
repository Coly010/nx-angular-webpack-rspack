import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib445Component } from './lib445.component';

describe('Lib445Component', () => {
  let component: Lib445Component;
  let fixture: ComponentFixture<Lib445Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib445Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib445Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
