import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib381Component } from './lib381.component';

describe('Lib381Component', () => {
  let component: Lib381Component;
  let fixture: ComponentFixture<Lib381Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib381Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib381Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
