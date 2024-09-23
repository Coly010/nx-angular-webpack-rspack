import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib650Component } from './lib650.component';

describe('Lib650Component', () => {
  let component: Lib650Component;
  let fixture: ComponentFixture<Lib650Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib650Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib650Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
