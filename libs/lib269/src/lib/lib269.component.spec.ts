import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib269Component } from './lib269.component';

describe('Lib269Component', () => {
  let component: Lib269Component;
  let fixture: ComponentFixture<Lib269Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib269Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib269Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
