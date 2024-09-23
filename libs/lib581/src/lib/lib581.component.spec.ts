import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib581Component } from './lib581.component';

describe('Lib581Component', () => {
  let component: Lib581Component;
  let fixture: ComponentFixture<Lib581Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib581Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib581Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
