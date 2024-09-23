import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib646Component } from './lib646.component';

describe('Lib646Component', () => {
  let component: Lib646Component;
  let fixture: ComponentFixture<Lib646Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib646Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib646Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
