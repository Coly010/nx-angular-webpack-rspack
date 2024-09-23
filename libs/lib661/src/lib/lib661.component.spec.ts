import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib661Component } from './lib661.component';

describe('Lib661Component', () => {
  let component: Lib661Component;
  let fixture: ComponentFixture<Lib661Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib661Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib661Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
