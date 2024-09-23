import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib637Component } from './lib637.component';

describe('Lib637Component', () => {
  let component: Lib637Component;
  let fixture: ComponentFixture<Lib637Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib637Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib637Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
