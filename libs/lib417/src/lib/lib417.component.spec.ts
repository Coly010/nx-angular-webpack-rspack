import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib417Component } from './lib417.component';

describe('Lib417Component', () => {
  let component: Lib417Component;
  let fixture: ComponentFixture<Lib417Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib417Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib417Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
