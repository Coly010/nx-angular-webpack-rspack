import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib219Component } from './lib219.component';

describe('Lib219Component', () => {
  let component: Lib219Component;
  let fixture: ComponentFixture<Lib219Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib219Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib219Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
