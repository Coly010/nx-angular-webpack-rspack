import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib413Component } from './lib413.component';

describe('Lib413Component', () => {
  let component: Lib413Component;
  let fixture: ComponentFixture<Lib413Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib413Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib413Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
