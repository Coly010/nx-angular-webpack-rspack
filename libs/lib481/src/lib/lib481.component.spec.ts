import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib481Component } from './lib481.component';

describe('Lib481Component', () => {
  let component: Lib481Component;
  let fixture: ComponentFixture<Lib481Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib481Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib481Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
