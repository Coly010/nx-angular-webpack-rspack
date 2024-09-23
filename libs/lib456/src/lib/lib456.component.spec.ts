import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib456Component } from './lib456.component';

describe('Lib456Component', () => {
  let component: Lib456Component;
  let fixture: ComponentFixture<Lib456Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib456Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib456Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
