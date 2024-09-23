import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib657Component } from './lib657.component';

describe('Lib657Component', () => {
  let component: Lib657Component;
  let fixture: ComponentFixture<Lib657Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib657Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib657Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
