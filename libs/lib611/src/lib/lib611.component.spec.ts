import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib611Component } from './lib611.component';

describe('Lib611Component', () => {
  let component: Lib611Component;
  let fixture: ComponentFixture<Lib611Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib611Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib611Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
