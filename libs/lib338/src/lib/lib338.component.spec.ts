import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib338Component } from './lib338.component';

describe('Lib338Component', () => {
  let component: Lib338Component;
  let fixture: ComponentFixture<Lib338Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib338Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib338Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
