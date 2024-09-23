import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib334Component } from './lib334.component';

describe('Lib334Component', () => {
  let component: Lib334Component;
  let fixture: ComponentFixture<Lib334Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib334Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib334Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
