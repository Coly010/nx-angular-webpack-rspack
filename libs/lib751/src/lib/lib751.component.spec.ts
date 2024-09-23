import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib751Component } from './lib751.component';

describe('Lib751Component', () => {
  let component: Lib751Component;
  let fixture: ComponentFixture<Lib751Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib751Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib751Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
