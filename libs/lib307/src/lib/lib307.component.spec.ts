import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib307Component } from './lib307.component';

describe('Lib307Component', () => {
  let component: Lib307Component;
  let fixture: ComponentFixture<Lib307Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib307Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib307Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
