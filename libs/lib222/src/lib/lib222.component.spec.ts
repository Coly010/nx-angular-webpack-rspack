import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib222Component } from './lib222.component';

describe('Lib222Component', () => {
  let component: Lib222Component;
  let fixture: ComponentFixture<Lib222Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib222Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib222Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
