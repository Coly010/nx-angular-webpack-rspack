import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib571Component } from './lib571.component';

describe('Lib571Component', () => {
  let component: Lib571Component;
  let fixture: ComponentFixture<Lib571Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib571Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib571Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
