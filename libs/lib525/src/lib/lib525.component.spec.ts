import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib525Component } from './lib525.component';

describe('Lib525Component', () => {
  let component: Lib525Component;
  let fixture: ComponentFixture<Lib525Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib525Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib525Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
