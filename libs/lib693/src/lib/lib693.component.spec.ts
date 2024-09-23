import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib693Component } from './lib693.component';

describe('Lib693Component', () => {
  let component: Lib693Component;
  let fixture: ComponentFixture<Lib693Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib693Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib693Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
