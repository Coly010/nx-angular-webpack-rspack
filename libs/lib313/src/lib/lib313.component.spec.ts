import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib313Component } from './lib313.component';

describe('Lib313Component', () => {
  let component: Lib313Component;
  let fixture: ComponentFixture<Lib313Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib313Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib313Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
