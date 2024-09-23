import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib404Component } from './lib404.component';

describe('Lib404Component', () => {
  let component: Lib404Component;
  let fixture: ComponentFixture<Lib404Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib404Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib404Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
