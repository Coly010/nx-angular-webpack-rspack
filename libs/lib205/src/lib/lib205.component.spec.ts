import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib205Component } from './lib205.component';

describe('Lib205Component', () => {
  let component: Lib205Component;
  let fixture: ComponentFixture<Lib205Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib205Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib205Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
