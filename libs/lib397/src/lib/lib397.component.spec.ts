import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib397Component } from './lib397.component';

describe('Lib397Component', () => {
  let component: Lib397Component;
  let fixture: ComponentFixture<Lib397Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib397Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib397Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
