import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib609Component } from './lib609.component';

describe('Lib609Component', () => {
  let component: Lib609Component;
  let fixture: ComponentFixture<Lib609Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib609Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib609Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
