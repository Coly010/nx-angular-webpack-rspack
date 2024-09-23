import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib166Component } from './lib166.component';

describe('Lib166Component', () => {
  let component: Lib166Component;
  let fixture: ComponentFixture<Lib166Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib166Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib166Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
