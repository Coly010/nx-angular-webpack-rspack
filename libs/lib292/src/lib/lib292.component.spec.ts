import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib292Component } from './lib292.component';

describe('Lib292Component', () => {
  let component: Lib292Component;
  let fixture: ComponentFixture<Lib292Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib292Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib292Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
