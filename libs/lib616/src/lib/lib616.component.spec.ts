import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib616Component } from './lib616.component';

describe('Lib616Component', () => {
  let component: Lib616Component;
  let fixture: ComponentFixture<Lib616Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib616Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib616Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
