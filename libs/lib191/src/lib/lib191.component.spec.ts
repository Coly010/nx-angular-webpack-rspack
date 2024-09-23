import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib191Component } from './lib191.component';

describe('Lib191Component', () => {
  let component: Lib191Component;
  let fixture: ComponentFixture<Lib191Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib191Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib191Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
