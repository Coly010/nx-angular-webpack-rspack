import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib216Component } from './lib216.component';

describe('Lib216Component', () => {
  let component: Lib216Component;
  let fixture: ComponentFixture<Lib216Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib216Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib216Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
