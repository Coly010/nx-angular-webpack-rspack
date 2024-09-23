import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib464Component } from './lib464.component';

describe('Lib464Component', () => {
  let component: Lib464Component;
  let fixture: ComponentFixture<Lib464Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib464Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib464Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
