import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib14Component } from './lib14.component';

describe('Lib14Component', () => {
  let component: Lib14Component;
  let fixture: ComponentFixture<Lib14Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib14Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
