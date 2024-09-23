import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib595Component } from './lib595.component';

describe('Lib595Component', () => {
  let component: Lib595Component;
  let fixture: ComponentFixture<Lib595Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib595Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib595Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
