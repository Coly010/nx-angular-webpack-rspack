import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib675Component } from './lib675.component';

describe('Lib675Component', () => {
  let component: Lib675Component;
  let fixture: ComponentFixture<Lib675Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib675Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib675Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
