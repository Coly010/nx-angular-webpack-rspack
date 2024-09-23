import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib110Component } from './lib110.component';

describe('Lib110Component', () => {
  let component: Lib110Component;
  let fixture: ComponentFixture<Lib110Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib110Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib110Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
