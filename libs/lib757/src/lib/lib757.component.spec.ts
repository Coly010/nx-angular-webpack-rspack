import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib757Component } from './lib757.component';

describe('Lib757Component', () => {
  let component: Lib757Component;
  let fixture: ComponentFixture<Lib757Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib757Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib757Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
