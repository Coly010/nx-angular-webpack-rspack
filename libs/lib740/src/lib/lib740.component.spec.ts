import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib740Component } from './lib740.component';

describe('Lib740Component', () => {
  let component: Lib740Component;
  let fixture: ComponentFixture<Lib740Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib740Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib740Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
