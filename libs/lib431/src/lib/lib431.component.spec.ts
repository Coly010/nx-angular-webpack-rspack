import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib431Component } from './lib431.component';

describe('Lib431Component', () => {
  let component: Lib431Component;
  let fixture: ComponentFixture<Lib431Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib431Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib431Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
