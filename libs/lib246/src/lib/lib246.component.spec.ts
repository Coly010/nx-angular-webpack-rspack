import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib246Component } from './lib246.component';

describe('Lib246Component', () => {
  let component: Lib246Component;
  let fixture: ComponentFixture<Lib246Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib246Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib246Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
