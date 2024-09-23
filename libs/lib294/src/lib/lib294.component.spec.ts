import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib294Component } from './lib294.component';

describe('Lib294Component', () => {
  let component: Lib294Component;
  let fixture: ComponentFixture<Lib294Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib294Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib294Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
