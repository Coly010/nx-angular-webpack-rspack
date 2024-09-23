import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib696Component } from './lib696.component';

describe('Lib696Component', () => {
  let component: Lib696Component;
  let fixture: ComponentFixture<Lib696Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib696Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib696Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
