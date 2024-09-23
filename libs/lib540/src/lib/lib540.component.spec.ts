import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib540Component } from './lib540.component';

describe('Lib540Component', () => {
  let component: Lib540Component;
  let fixture: ComponentFixture<Lib540Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib540Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib540Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
