import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib116Component } from './lib116.component';

describe('Lib116Component', () => {
  let component: Lib116Component;
  let fixture: ComponentFixture<Lib116Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib116Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib116Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
