import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib194Component } from './lib194.component';

describe('Lib194Component', () => {
  let component: Lib194Component;
  let fixture: ComponentFixture<Lib194Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib194Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib194Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
