import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib274Component } from './lib274.component';

describe('Lib274Component', () => {
  let component: Lib274Component;
  let fixture: ComponentFixture<Lib274Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib274Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib274Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
