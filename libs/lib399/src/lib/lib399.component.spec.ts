import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib399Component } from './lib399.component';

describe('Lib399Component', () => {
  let component: Lib399Component;
  let fixture: ComponentFixture<Lib399Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib399Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib399Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
