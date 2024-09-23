import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib175Component } from './lib175.component';

describe('Lib175Component', () => {
  let component: Lib175Component;
  let fixture: ComponentFixture<Lib175Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib175Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib175Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
