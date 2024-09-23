import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib490Component } from './lib490.component';

describe('Lib490Component', () => {
  let component: Lib490Component;
  let fixture: ComponentFixture<Lib490Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib490Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib490Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
