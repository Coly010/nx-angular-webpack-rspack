import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib316Component } from './lib316.component';

describe('Lib316Component', () => {
  let component: Lib316Component;
  let fixture: ComponentFixture<Lib316Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib316Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib316Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
