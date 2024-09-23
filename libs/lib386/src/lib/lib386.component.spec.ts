import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib386Component } from './lib386.component';

describe('Lib386Component', () => {
  let component: Lib386Component;
  let fixture: ComponentFixture<Lib386Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib386Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib386Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
