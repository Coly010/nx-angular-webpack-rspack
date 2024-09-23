import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib284Component } from './lib284.component';

describe('Lib284Component', () => {
  let component: Lib284Component;
  let fixture: ComponentFixture<Lib284Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib284Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib284Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
