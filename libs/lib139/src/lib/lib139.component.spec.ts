import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib139Component } from './lib139.component';

describe('Lib139Component', () => {
  let component: Lib139Component;
  let fixture: ComponentFixture<Lib139Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib139Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib139Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
