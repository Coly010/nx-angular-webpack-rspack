import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib310Component } from './lib310.component';

describe('Lib310Component', () => {
  let component: Lib310Component;
  let fixture: ComponentFixture<Lib310Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib310Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib310Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
