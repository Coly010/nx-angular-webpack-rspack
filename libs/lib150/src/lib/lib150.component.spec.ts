import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib150Component } from './lib150.component';

describe('Lib150Component', () => {
  let component: Lib150Component;
  let fixture: ComponentFixture<Lib150Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib150Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib150Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
