import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib741Component } from './lib741.component';

describe('Lib741Component', () => {
  let component: Lib741Component;
  let fixture: ComponentFixture<Lib741Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib741Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib741Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
