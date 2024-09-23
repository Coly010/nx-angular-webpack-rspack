import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib157Component } from './lib157.component';

describe('Lib157Component', () => {
  let component: Lib157Component;
  let fixture: ComponentFixture<Lib157Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib157Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib157Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
