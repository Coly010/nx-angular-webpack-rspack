import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib591Component } from './lib591.component';

describe('Lib591Component', () => {
  let component: Lib591Component;
  let fixture: ComponentFixture<Lib591Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib591Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib591Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
