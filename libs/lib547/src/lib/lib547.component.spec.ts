import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib547Component } from './lib547.component';

describe('Lib547Component', () => {
  let component: Lib547Component;
  let fixture: ComponentFixture<Lib547Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib547Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib547Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
