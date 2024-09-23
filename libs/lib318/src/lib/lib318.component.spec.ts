import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib318Component } from './lib318.component';

describe('Lib318Component', () => {
  let component: Lib318Component;
  let fixture: ComponentFixture<Lib318Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib318Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib318Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
