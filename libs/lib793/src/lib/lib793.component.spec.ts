import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib793Component } from './lib793.component';

describe('Lib793Component', () => {
  let component: Lib793Component;
  let fixture: ComponentFixture<Lib793Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib793Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib793Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
