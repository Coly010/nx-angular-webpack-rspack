import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib416Component } from './lib416.component';

describe('Lib416Component', () => {
  let component: Lib416Component;
  let fixture: ComponentFixture<Lib416Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib416Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib416Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
