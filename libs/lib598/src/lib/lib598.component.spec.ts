import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib598Component } from './lib598.component';

describe('Lib598Component', () => {
  let component: Lib598Component;
  let fixture: ComponentFixture<Lib598Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib598Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib598Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
