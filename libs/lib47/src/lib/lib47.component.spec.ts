import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib47Component } from './lib47.component';

describe('Lib47Component', () => {
  let component: Lib47Component;
  let fixture: ComponentFixture<Lib47Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib47Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib47Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
