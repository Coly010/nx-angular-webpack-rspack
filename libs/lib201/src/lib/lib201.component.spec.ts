import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib201Component } from './lib201.component';

describe('Lib201Component', () => {
  let component: Lib201Component;
  let fixture: ComponentFixture<Lib201Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib201Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib201Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
