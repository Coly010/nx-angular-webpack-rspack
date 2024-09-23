import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib584Component } from './lib584.component';

describe('Lib584Component', () => {
  let component: Lib584Component;
  let fixture: ComponentFixture<Lib584Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib584Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib584Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
