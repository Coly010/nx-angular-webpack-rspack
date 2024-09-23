import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib210Component } from './lib210.component';

describe('Lib210Component', () => {
  let component: Lib210Component;
  let fixture: ComponentFixture<Lib210Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib210Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib210Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
