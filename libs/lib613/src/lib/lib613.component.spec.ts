import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib613Component } from './lib613.component';

describe('Lib613Component', () => {
  let component: Lib613Component;
  let fixture: ComponentFixture<Lib613Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib613Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib613Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
