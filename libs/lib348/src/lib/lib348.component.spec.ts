import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib348Component } from './lib348.component';

describe('Lib348Component', () => {
  let component: Lib348Component;
  let fixture: ComponentFixture<Lib348Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib348Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib348Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
