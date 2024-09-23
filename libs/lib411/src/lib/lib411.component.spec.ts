import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib411Component } from './lib411.component';

describe('Lib411Component', () => {
  let component: Lib411Component;
  let fixture: ComponentFixture<Lib411Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib411Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib411Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
