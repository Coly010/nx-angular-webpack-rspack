import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib747Component } from './lib747.component';

describe('Lib747Component', () => {
  let component: Lib747Component;
  let fixture: ComponentFixture<Lib747Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib747Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib747Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
