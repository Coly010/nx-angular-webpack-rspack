import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib752Component } from './lib752.component';

describe('Lib752Component', () => {
  let component: Lib752Component;
  let fixture: ComponentFixture<Lib752Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib752Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib752Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
