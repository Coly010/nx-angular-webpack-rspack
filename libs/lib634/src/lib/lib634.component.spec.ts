import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib634Component } from './lib634.component';

describe('Lib634Component', () => {
  let component: Lib634Component;
  let fixture: ComponentFixture<Lib634Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib634Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib634Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
