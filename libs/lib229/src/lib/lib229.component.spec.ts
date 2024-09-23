import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib229Component } from './lib229.component';

describe('Lib229Component', () => {
  let component: Lib229Component;
  let fixture: ComponentFixture<Lib229Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib229Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib229Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
