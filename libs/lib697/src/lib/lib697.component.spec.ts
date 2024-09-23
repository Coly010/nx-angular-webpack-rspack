import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib697Component } from './lib697.component';

describe('Lib697Component', () => {
  let component: Lib697Component;
  let fixture: ComponentFixture<Lib697Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib697Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib697Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
