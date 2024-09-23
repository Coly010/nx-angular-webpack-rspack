import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib707Component } from './lib707.component';

describe('Lib707Component', () => {
  let component: Lib707Component;
  let fixture: ComponentFixture<Lib707Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib707Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib707Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
