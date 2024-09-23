import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib179Component } from './lib179.component';

describe('Lib179Component', () => {
  let component: Lib179Component;
  let fixture: ComponentFixture<Lib179Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib179Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib179Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
