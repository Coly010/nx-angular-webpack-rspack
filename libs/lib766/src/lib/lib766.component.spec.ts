import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib766Component } from './lib766.component';

describe('Lib766Component', () => {
  let component: Lib766Component;
  let fixture: ComponentFixture<Lib766Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib766Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib766Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
