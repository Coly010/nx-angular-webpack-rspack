import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib639Component } from './lib639.component';

describe('Lib639Component', () => {
  let component: Lib639Component;
  let fixture: ComponentFixture<Lib639Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib639Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib639Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
