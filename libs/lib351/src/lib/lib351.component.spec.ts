import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib351Component } from './lib351.component';

describe('Lib351Component', () => {
  let component: Lib351Component;
  let fixture: ComponentFixture<Lib351Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib351Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib351Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
