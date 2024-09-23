import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib196Component } from './lib196.component';

describe('Lib196Component', () => {
  let component: Lib196Component;
  let fixture: ComponentFixture<Lib196Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib196Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib196Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
