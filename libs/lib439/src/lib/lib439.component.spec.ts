import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib439Component } from './lib439.component';

describe('Lib439Component', () => {
  let component: Lib439Component;
  let fixture: ComponentFixture<Lib439Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib439Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib439Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
