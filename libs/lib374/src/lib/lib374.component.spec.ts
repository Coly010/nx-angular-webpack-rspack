import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib374Component } from './lib374.component';

describe('Lib374Component', () => {
  let component: Lib374Component;
  let fixture: ComponentFixture<Lib374Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib374Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib374Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
