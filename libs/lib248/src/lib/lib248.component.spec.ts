import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib248Component } from './lib248.component';

describe('Lib248Component', () => {
  let component: Lib248Component;
  let fixture: ComponentFixture<Lib248Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib248Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib248Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
