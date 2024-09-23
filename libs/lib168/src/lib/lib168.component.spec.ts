import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib168Component } from './lib168.component';

describe('Lib168Component', () => {
  let component: Lib168Component;
  let fixture: ComponentFixture<Lib168Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib168Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib168Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
