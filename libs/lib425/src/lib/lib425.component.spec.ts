import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib425Component } from './lib425.component';

describe('Lib425Component', () => {
  let component: Lib425Component;
  let fixture: ComponentFixture<Lib425Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib425Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib425Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
