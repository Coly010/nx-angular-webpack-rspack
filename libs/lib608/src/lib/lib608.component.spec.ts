import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib608Component } from './lib608.component';

describe('Lib608Component', () => {
  let component: Lib608Component;
  let fixture: ComponentFixture<Lib608Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib608Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib608Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
