import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib52Component } from './lib52.component';

describe('Lib52Component', () => {
  let component: Lib52Component;
  let fixture: ComponentFixture<Lib52Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib52Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib52Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
