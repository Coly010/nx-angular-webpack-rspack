import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib600Component } from './lib600.component';

describe('Lib600Component', () => {
  let component: Lib600Component;
  let fixture: ComponentFixture<Lib600Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib600Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib600Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
