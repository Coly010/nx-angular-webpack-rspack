import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib638Component } from './lib638.component';

describe('Lib638Component', () => {
  let component: Lib638Component;
  let fixture: ComponentFixture<Lib638Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib638Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib638Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
