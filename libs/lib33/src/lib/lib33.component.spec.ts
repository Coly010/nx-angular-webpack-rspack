import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib33Component } from './lib33.component';

describe('Lib33Component', () => {
  let component: Lib33Component;
  let fixture: ComponentFixture<Lib33Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib33Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib33Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
