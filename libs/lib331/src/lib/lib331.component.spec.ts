import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib331Component } from './lib331.component';

describe('Lib331Component', () => {
  let component: Lib331Component;
  let fixture: ComponentFixture<Lib331Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib331Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib331Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
