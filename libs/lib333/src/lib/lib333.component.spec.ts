import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib333Component } from './lib333.component';

describe('Lib333Component', () => {
  let component: Lib333Component;
  let fixture: ComponentFixture<Lib333Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib333Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib333Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
