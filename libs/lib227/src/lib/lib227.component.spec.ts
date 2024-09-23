import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib227Component } from './lib227.component';

describe('Lib227Component', () => {
  let component: Lib227Component;
  let fixture: ComponentFixture<Lib227Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib227Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib227Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
