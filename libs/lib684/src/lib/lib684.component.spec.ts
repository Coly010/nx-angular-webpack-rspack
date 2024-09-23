import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib684Component } from './lib684.component';

describe('Lib684Component', () => {
  let component: Lib684Component;
  let fixture: ComponentFixture<Lib684Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib684Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib684Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
