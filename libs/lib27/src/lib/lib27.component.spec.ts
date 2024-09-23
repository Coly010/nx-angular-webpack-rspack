import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib27Component } from './lib27.component';

describe('Lib27Component', () => {
  let component: Lib27Component;
  let fixture: ComponentFixture<Lib27Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib27Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
