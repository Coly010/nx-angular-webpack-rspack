import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib343Component } from './lib343.component';

describe('Lib343Component', () => {
  let component: Lib343Component;
  let fixture: ComponentFixture<Lib343Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib343Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib343Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
