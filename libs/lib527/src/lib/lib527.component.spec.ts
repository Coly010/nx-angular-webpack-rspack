import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib527Component } from './lib527.component';

describe('Lib527Component', () => {
  let component: Lib527Component;
  let fixture: ComponentFixture<Lib527Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib527Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib527Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
