import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib565Component } from './lib565.component';

describe('Lib565Component', () => {
  let component: Lib565Component;
  let fixture: ComponentFixture<Lib565Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib565Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib565Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
