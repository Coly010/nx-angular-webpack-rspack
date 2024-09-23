import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib761Component } from './lib761.component';

describe('Lib761Component', () => {
  let component: Lib761Component;
  let fixture: ComponentFixture<Lib761Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib761Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib761Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
