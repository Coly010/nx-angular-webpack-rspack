import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib744Component } from './lib744.component';

describe('Lib744Component', () => {
  let component: Lib744Component;
  let fixture: ComponentFixture<Lib744Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib744Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib744Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
