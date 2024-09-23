import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib132Component } from './lib132.component';

describe('Lib132Component', () => {
  let component: Lib132Component;
  let fixture: ComponentFixture<Lib132Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib132Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib132Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
