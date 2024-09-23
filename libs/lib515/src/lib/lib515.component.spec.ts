import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib515Component } from './lib515.component';

describe('Lib515Component', () => {
  let component: Lib515Component;
  let fixture: ComponentFixture<Lib515Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib515Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib515Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
