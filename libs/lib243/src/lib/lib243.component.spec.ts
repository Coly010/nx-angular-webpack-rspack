import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib243Component } from './lib243.component';

describe('Lib243Component', () => {
  let component: Lib243Component;
  let fixture: ComponentFixture<Lib243Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib243Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib243Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
