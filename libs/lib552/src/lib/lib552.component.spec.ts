import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib552Component } from './lib552.component';

describe('Lib552Component', () => {
  let component: Lib552Component;
  let fixture: ComponentFixture<Lib552Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib552Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib552Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
