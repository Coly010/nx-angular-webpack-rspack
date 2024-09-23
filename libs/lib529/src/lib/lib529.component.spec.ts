import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib529Component } from './lib529.component';

describe('Lib529Component', () => {
  let component: Lib529Component;
  let fixture: ComponentFixture<Lib529Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib529Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib529Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
