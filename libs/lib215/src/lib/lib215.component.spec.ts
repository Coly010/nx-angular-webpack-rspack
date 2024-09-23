import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib215Component } from './lib215.component';

describe('Lib215Component', () => {
  let component: Lib215Component;
  let fixture: ComponentFixture<Lib215Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib215Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib215Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
