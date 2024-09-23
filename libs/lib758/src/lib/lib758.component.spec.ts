import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib758Component } from './lib758.component';

describe('Lib758Component', () => {
  let component: Lib758Component;
  let fixture: ComponentFixture<Lib758Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib758Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib758Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
