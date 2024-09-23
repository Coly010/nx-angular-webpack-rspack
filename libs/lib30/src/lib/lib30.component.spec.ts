import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib30Component } from './lib30.component';

describe('Lib30Component', () => {
  let component: Lib30Component;
  let fixture: ComponentFixture<Lib30Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib30Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib30Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
