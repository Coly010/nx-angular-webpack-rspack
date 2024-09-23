import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib688Component } from './lib688.component';

describe('Lib688Component', () => {
  let component: Lib688Component;
  let fixture: ComponentFixture<Lib688Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib688Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib688Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
