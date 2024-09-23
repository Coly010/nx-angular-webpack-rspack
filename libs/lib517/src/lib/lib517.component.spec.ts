import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib517Component } from './lib517.component';

describe('Lib517Component', () => {
  let component: Lib517Component;
  let fixture: ComponentFixture<Lib517Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib517Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib517Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
