import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib250Component } from './lib250.component';

describe('Lib250Component', () => {
  let component: Lib250Component;
  let fixture: ComponentFixture<Lib250Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib250Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib250Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
