import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib784Component } from './lib784.component';

describe('Lib784Component', () => {
  let component: Lib784Component;
  let fixture: ComponentFixture<Lib784Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib784Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib784Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
