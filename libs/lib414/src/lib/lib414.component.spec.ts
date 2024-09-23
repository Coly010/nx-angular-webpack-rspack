import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib414Component } from './lib414.component';

describe('Lib414Component', () => {
  let component: Lib414Component;
  let fixture: ComponentFixture<Lib414Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib414Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib414Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
