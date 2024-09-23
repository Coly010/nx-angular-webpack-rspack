import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib776Component } from './lib776.component';

describe('Lib776Component', () => {
  let component: Lib776Component;
  let fixture: ComponentFixture<Lib776Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib776Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib776Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
