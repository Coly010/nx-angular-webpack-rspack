import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib562Component } from './lib562.component';

describe('Lib562Component', () => {
  let component: Lib562Component;
  let fixture: ComponentFixture<Lib562Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib562Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib562Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
