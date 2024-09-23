import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib325Component } from './lib325.component';

describe('Lib325Component', () => {
  let component: Lib325Component;
  let fixture: ComponentFixture<Lib325Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib325Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib325Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
