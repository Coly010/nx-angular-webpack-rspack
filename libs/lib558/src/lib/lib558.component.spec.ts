import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib558Component } from './lib558.component';

describe('Lib558Component', () => {
  let component: Lib558Component;
  let fixture: ComponentFixture<Lib558Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib558Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib558Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
