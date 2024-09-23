import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib759Component } from './lib759.component';

describe('Lib759Component', () => {
  let component: Lib759Component;
  let fixture: ComponentFixture<Lib759Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib759Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib759Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
