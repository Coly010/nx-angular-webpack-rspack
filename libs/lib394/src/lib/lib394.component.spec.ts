import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib394Component } from './lib394.component';

describe('Lib394Component', () => {
  let component: Lib394Component;
  let fixture: ComponentFixture<Lib394Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib394Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib394Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
