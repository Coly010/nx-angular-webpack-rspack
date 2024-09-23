import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib705Component } from './lib705.component';

describe('Lib705Component', () => {
  let component: Lib705Component;
  let fixture: ComponentFixture<Lib705Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib705Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib705Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
