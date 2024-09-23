import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib265Component } from './lib265.component';

describe('Lib265Component', () => {
  let component: Lib265Component;
  let fixture: ComponentFixture<Lib265Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib265Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib265Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
