import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib450Component } from './lib450.component';

describe('Lib450Component', () => {
  let component: Lib450Component;
  let fixture: ComponentFixture<Lib450Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib450Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib450Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
