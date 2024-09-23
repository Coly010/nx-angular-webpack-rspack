import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib152Component } from './lib152.component';

describe('Lib152Component', () => {
  let component: Lib152Component;
  let fixture: ComponentFixture<Lib152Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib152Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib152Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
