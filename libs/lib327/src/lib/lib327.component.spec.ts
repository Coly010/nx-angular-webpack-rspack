import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib327Component } from './lib327.component';

describe('Lib327Component', () => {
  let component: Lib327Component;
  let fixture: ComponentFixture<Lib327Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib327Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib327Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
