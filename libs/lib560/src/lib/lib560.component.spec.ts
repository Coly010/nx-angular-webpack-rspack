import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib560Component } from './lib560.component';

describe('Lib560Component', () => {
  let component: Lib560Component;
  let fixture: ComponentFixture<Lib560Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib560Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib560Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
