import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib430Component } from './lib430.component';

describe('Lib430Component', () => {
  let component: Lib430Component;
  let fixture: ComponentFixture<Lib430Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib430Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib430Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
