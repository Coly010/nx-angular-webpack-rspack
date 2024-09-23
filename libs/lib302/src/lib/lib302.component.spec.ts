import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib302Component } from './lib302.component';

describe('Lib302Component', () => {
  let component: Lib302Component;
  let fixture: ComponentFixture<Lib302Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib302Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib302Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
