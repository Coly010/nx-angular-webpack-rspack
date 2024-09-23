import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib406Component } from './lib406.component';

describe('Lib406Component', () => {
  let component: Lib406Component;
  let fixture: ComponentFixture<Lib406Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib406Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib406Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
