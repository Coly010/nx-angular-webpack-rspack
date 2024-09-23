import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib280Component } from './lib280.component';

describe('Lib280Component', () => {
  let component: Lib280Component;
  let fixture: ComponentFixture<Lib280Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib280Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib280Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
