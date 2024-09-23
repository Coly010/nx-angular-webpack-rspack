import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib706Component } from './lib706.component';

describe('Lib706Component', () => {
  let component: Lib706Component;
  let fixture: ComponentFixture<Lib706Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib706Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib706Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
