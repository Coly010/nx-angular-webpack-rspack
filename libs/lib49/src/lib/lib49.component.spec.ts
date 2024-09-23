import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib49Component } from './lib49.component';

describe('Lib49Component', () => {
  let component: Lib49Component;
  let fixture: ComponentFixture<Lib49Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib49Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib49Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
