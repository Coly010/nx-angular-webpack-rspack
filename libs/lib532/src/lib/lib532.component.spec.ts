import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib532Component } from './lib532.component';

describe('Lib532Component', () => {
  let component: Lib532Component;
  let fixture: ComponentFixture<Lib532Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib532Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib532Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
