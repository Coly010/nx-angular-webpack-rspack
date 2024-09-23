import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib574Component } from './lib574.component';

describe('Lib574Component', () => {
  let component: Lib574Component;
  let fixture: ComponentFixture<Lib574Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib574Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib574Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
