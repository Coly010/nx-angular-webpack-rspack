import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib652Component } from './lib652.component';

describe('Lib652Component', () => {
  let component: Lib652Component;
  let fixture: ComponentFixture<Lib652Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib652Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib652Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
