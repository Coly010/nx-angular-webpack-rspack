import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib543Component } from './lib543.component';

describe('Lib543Component', () => {
  let component: Lib543Component;
  let fixture: ComponentFixture<Lib543Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib543Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib543Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
