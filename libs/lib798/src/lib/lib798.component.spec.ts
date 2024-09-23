import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib798Component } from './lib798.component';

describe('Lib798Component', () => {
  let component: Lib798Component;
  let fixture: ComponentFixture<Lib798Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib798Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib798Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
