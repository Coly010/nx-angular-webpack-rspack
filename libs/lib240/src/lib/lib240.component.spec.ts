import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib240Component } from './lib240.component';

describe('Lib240Component', () => {
  let component: Lib240Component;
  let fixture: ComponentFixture<Lib240Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib240Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib240Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
