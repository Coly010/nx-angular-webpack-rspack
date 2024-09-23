import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib120Component } from './lib120.component';

describe('Lib120Component', () => {
  let component: Lib120Component;
  let fixture: ComponentFixture<Lib120Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib120Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib120Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
