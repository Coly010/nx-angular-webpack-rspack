import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib677Component } from './lib677.component';

describe('Lib677Component', () => {
  let component: Lib677Component;
  let fixture: ComponentFixture<Lib677Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib677Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib677Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
