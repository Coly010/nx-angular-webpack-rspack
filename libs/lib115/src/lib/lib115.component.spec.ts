import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib115Component } from './lib115.component';

describe('Lib115Component', () => {
  let component: Lib115Component;
  let fixture: ComponentFixture<Lib115Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib115Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib115Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
