import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib623Component } from './lib623.component';

describe('Lib623Component', () => {
  let component: Lib623Component;
  let fixture: ComponentFixture<Lib623Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib623Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib623Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
