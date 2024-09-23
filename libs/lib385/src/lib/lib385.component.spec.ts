import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib385Component } from './lib385.component';

describe('Lib385Component', () => {
  let component: Lib385Component;
  let fixture: ComponentFixture<Lib385Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib385Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib385Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
