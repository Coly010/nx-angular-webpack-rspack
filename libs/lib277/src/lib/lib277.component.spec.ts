import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib277Component } from './lib277.component';

describe('Lib277Component', () => {
  let component: Lib277Component;
  let fixture: ComponentFixture<Lib277Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib277Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib277Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
