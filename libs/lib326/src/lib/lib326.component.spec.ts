import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib326Component } from './lib326.component';

describe('Lib326Component', () => {
  let component: Lib326Component;
  let fixture: ComponentFixture<Lib326Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib326Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib326Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
