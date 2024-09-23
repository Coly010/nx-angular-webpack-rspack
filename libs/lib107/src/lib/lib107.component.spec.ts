import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib107Component } from './lib107.component';

describe('Lib107Component', () => {
  let component: Lib107Component;
  let fixture: ComponentFixture<Lib107Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib107Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib107Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
