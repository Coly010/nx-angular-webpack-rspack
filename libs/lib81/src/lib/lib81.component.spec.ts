import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib81Component } from './lib81.component';

describe('Lib81Component', () => {
  let component: Lib81Component;
  let fixture: ComponentFixture<Lib81Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib81Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib81Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
