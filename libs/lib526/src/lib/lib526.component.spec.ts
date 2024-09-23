import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib526Component } from './lib526.component';

describe('Lib526Component', () => {
  let component: Lib526Component;
  let fixture: ComponentFixture<Lib526Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib526Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib526Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
