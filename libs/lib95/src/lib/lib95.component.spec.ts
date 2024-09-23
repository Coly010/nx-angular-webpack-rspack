import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib95Component } from './lib95.component';

describe('Lib95Component', () => {
  let component: Lib95Component;
  let fixture: ComponentFixture<Lib95Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib95Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib95Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
