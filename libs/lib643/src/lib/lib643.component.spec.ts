import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib643Component } from './lib643.component';

describe('Lib643Component', () => {
  let component: Lib643Component;
  let fixture: ComponentFixture<Lib643Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib643Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib643Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
