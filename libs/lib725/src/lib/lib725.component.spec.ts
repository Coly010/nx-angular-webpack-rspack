import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib725Component } from './lib725.component';

describe('Lib725Component', () => {
  let component: Lib725Component;
  let fixture: ComponentFixture<Lib725Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib725Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib725Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
