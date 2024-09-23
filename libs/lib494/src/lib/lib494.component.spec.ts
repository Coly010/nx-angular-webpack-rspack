import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib494Component } from './lib494.component';

describe('Lib494Component', () => {
  let component: Lib494Component;
  let fixture: ComponentFixture<Lib494Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib494Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib494Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
