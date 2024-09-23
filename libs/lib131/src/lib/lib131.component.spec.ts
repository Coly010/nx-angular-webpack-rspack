import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib131Component } from './lib131.component';

describe('Lib131Component', () => {
  let component: Lib131Component;
  let fixture: ComponentFixture<Lib131Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib131Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib131Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
