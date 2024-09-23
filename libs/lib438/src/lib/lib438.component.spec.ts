import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib438Component } from './lib438.component';

describe('Lib438Component', () => {
  let component: Lib438Component;
  let fixture: ComponentFixture<Lib438Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib438Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib438Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
