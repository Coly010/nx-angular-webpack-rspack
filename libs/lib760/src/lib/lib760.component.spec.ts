import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib760Component } from './lib760.component';

describe('Lib760Component', () => {
  let component: Lib760Component;
  let fixture: ComponentFixture<Lib760Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib760Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib760Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
