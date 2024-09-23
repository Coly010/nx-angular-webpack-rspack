import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib676Component } from './lib676.component';

describe('Lib676Component', () => {
  let component: Lib676Component;
  let fixture: ComponentFixture<Lib676Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib676Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib676Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
