import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib28Component } from './lib28.component';

describe('Lib28Component', () => {
  let component: Lib28Component;
  let fixture: ComponentFixture<Lib28Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib28Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
