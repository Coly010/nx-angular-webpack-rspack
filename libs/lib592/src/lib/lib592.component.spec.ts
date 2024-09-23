import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib592Component } from './lib592.component';

describe('Lib592Component', () => {
  let component: Lib592Component;
  let fixture: ComponentFixture<Lib592Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib592Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib592Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
