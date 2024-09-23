import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib237Component } from './lib237.component';

describe('Lib237Component', () => {
  let component: Lib237Component;
  let fixture: ComponentFixture<Lib237Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib237Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib237Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
