import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib478Component } from './lib478.component';

describe('Lib478Component', () => {
  let component: Lib478Component;
  let fixture: ComponentFixture<Lib478Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib478Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib478Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
