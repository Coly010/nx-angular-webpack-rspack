import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib189Component } from './lib189.component';

describe('Lib189Component', () => {
  let component: Lib189Component;
  let fixture: ComponentFixture<Lib189Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib189Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib189Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
