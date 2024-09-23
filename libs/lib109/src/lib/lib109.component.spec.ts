import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib109Component } from './lib109.component';

describe('Lib109Component', () => {
  let component: Lib109Component;
  let fixture: ComponentFixture<Lib109Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib109Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib109Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
