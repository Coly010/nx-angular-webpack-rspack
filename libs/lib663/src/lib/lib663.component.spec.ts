import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib663Component } from './lib663.component';

describe('Lib663Component', () => {
  let component: Lib663Component;
  let fixture: ComponentFixture<Lib663Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib663Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib663Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
