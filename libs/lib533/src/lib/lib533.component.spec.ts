import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib533Component } from './lib533.component';

describe('Lib533Component', () => {
  let component: Lib533Component;
  let fixture: ComponentFixture<Lib533Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib533Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib533Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
