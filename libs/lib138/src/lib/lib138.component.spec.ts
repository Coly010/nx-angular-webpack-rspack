import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib138Component } from './lib138.component';

describe('Lib138Component', () => {
  let component: Lib138Component;
  let fixture: ComponentFixture<Lib138Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib138Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib138Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
