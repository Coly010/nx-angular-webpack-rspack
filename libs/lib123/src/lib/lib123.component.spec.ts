import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib123Component } from './lib123.component';

describe('Lib123Component', () => {
  let component: Lib123Component;
  let fixture: ComponentFixture<Lib123Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib123Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib123Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
