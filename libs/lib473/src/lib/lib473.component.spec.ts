import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib473Component } from './lib473.component';

describe('Lib473Component', () => {
  let component: Lib473Component;
  let fixture: ComponentFixture<Lib473Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib473Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib473Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
