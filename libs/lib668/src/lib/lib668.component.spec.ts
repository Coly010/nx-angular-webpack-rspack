import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib668Component } from './lib668.component';

describe('Lib668Component', () => {
  let component: Lib668Component;
  let fixture: ComponentFixture<Lib668Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib668Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib668Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
