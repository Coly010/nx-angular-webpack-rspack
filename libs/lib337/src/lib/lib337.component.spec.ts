import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib337Component } from './lib337.component';

describe('Lib337Component', () => {
  let component: Lib337Component;
  let fixture: ComponentFixture<Lib337Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib337Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib337Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
