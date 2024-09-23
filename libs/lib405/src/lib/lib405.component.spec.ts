import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib405Component } from './lib405.component';

describe('Lib405Component', () => {
  let component: Lib405Component;
  let fixture: ComponentFixture<Lib405Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib405Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib405Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
