import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib112Component } from './lib112.component';

describe('Lib112Component', () => {
  let component: Lib112Component;
  let fixture: ComponentFixture<Lib112Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib112Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib112Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
