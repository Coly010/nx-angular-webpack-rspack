import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib570Component } from './lib570.component';

describe('Lib570Component', () => {
  let component: Lib570Component;
  let fixture: ComponentFixture<Lib570Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib570Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib570Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
