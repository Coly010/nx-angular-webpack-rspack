import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib234Component } from './lib234.component';

describe('Lib234Component', () => {
  let component: Lib234Component;
  let fixture: ComponentFixture<Lib234Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib234Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib234Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
