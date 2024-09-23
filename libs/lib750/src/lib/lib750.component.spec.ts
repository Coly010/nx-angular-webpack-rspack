import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib750Component } from './lib750.component';

describe('Lib750Component', () => {
  let component: Lib750Component;
  let fixture: ComponentFixture<Lib750Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib750Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib750Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
