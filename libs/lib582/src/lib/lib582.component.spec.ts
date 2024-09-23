import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib582Component } from './lib582.component';

describe('Lib582Component', () => {
  let component: Lib582Component;
  let fixture: ComponentFixture<Lib582Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib582Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib582Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
