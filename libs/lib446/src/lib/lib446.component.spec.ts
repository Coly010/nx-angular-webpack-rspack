import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib446Component } from './lib446.component';

describe('Lib446Component', () => {
  let component: Lib446Component;
  let fixture: ComponentFixture<Lib446Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib446Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib446Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
