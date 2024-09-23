import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib500Component } from './lib500.component';

describe('Lib500Component', () => {
  let component: Lib500Component;
  let fixture: ComponentFixture<Lib500Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib500Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib500Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
