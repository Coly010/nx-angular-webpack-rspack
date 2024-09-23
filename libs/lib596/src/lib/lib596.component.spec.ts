import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib596Component } from './lib596.component';

describe('Lib596Component', () => {
  let component: Lib596Component;
  let fixture: ComponentFixture<Lib596Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib596Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib596Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
