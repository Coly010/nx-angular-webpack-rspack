import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib726Component } from './lib726.component';

describe('Lib726Component', () => {
  let component: Lib726Component;
  let fixture: ComponentFixture<Lib726Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib726Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib726Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
