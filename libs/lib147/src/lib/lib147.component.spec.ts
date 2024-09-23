import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib147Component } from './lib147.component';

describe('Lib147Component', () => {
  let component: Lib147Component;
  let fixture: ComponentFixture<Lib147Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib147Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib147Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
