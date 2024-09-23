import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib48Component } from './lib48.component';

describe('Lib48Component', () => {
  let component: Lib48Component;
  let fixture: ComponentFixture<Lib48Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib48Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib48Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
