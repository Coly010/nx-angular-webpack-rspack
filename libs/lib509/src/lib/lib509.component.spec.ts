import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib509Component } from './lib509.component';

describe('Lib509Component', () => {
  let component: Lib509Component;
  let fixture: ComponentFixture<Lib509Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib509Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib509Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
