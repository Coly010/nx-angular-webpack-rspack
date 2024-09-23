import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib791Component } from './lib791.component';

describe('Lib791Component', () => {
  let component: Lib791Component;
  let fixture: ComponentFixture<Lib791Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib791Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib791Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
