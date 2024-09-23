import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib178Component } from './lib178.component';

describe('Lib178Component', () => {
  let component: Lib178Component;
  let fixture: ComponentFixture<Lib178Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib178Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib178Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
