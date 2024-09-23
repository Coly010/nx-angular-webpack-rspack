import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib409Component } from './lib409.component';

describe('Lib409Component', () => {
  let component: Lib409Component;
  let fixture: ComponentFixture<Lib409Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib409Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib409Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
