import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib230Component } from './lib230.component';

describe('Lib230Component', () => {
  let component: Lib230Component;
  let fixture: ComponentFixture<Lib230Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib230Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib230Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
