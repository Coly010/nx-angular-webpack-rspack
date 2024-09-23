import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib671Component } from './lib671.component';

describe('Lib671Component', () => {
  let component: Lib671Component;
  let fixture: ComponentFixture<Lib671Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib671Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib671Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
