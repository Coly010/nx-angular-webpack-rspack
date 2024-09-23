import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib746Component } from './lib746.component';

describe('Lib746Component', () => {
  let component: Lib746Component;
  let fixture: ComponentFixture<Lib746Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib746Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib746Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
