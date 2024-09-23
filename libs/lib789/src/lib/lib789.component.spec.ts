import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib789Component } from './lib789.component';

describe('Lib789Component', () => {
  let component: Lib789Component;
  let fixture: ComponentFixture<Lib789Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib789Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib789Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
