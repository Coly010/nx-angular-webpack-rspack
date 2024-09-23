import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib285Component } from './lib285.component';

describe('Lib285Component', () => {
  let component: Lib285Component;
  let fixture: ComponentFixture<Lib285Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib285Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib285Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
