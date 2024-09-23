import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib448Component } from './lib448.component';

describe('Lib448Component', () => {
  let component: Lib448Component;
  let fixture: ComponentFixture<Lib448Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib448Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib448Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
