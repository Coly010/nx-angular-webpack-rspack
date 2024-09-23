import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib749Component } from './lib749.component';

describe('Lib749Component', () => {
  let component: Lib749Component;
  let fixture: ComponentFixture<Lib749Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib749Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib749Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
