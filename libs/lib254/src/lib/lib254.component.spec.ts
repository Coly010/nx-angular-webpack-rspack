import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib254Component } from './lib254.component';

describe('Lib254Component', () => {
  let component: Lib254Component;
  let fixture: ComponentFixture<Lib254Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib254Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib254Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
