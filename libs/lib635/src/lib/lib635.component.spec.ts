import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib635Component } from './lib635.component';

describe('Lib635Component', () => {
  let component: Lib635Component;
  let fixture: ComponentFixture<Lib635Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib635Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib635Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
