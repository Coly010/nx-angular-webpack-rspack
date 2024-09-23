import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib373Component } from './lib373.component';

describe('Lib373Component', () => {
  let component: Lib373Component;
  let fixture: ComponentFixture<Lib373Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib373Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib373Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
