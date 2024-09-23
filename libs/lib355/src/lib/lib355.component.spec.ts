import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib355Component } from './lib355.component';

describe('Lib355Component', () => {
  let component: Lib355Component;
  let fixture: ComponentFixture<Lib355Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib355Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib355Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
