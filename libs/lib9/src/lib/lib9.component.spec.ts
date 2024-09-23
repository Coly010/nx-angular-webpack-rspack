import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib9Component } from './lib9.component';

describe('Lib9Component', () => {
  let component: Lib9Component;
  let fixture: ComponentFixture<Lib9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib9Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
