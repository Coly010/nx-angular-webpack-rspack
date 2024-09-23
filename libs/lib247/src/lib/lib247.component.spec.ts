import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib247Component } from './lib247.component';

describe('Lib247Component', () => {
  let component: Lib247Component;
  let fixture: ComponentFixture<Lib247Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib247Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib247Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
