import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib785Component } from './lib785.component';

describe('Lib785Component', () => {
  let component: Lib785Component;
  let fixture: ComponentFixture<Lib785Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib785Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib785Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
