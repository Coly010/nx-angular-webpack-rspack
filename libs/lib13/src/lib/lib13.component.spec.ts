import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib13Component } from './lib13.component';

describe('Lib13Component', () => {
  let component: Lib13Component;
  let fixture: ComponentFixture<Lib13Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib13Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
