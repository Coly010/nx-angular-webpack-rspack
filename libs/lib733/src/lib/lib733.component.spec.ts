import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib733Component } from './lib733.component';

describe('Lib733Component', () => {
  let component: Lib733Component;
  let fixture: ComponentFixture<Lib733Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib733Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib733Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
