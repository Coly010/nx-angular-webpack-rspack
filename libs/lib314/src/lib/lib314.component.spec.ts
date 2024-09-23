import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib314Component } from './lib314.component';

describe('Lib314Component', () => {
  let component: Lib314Component;
  let fixture: ComponentFixture<Lib314Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib314Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib314Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
