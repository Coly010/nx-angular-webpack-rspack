import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib460Component } from './lib460.component';

describe('Lib460Component', () => {
  let component: Lib460Component;
  let fixture: ComponentFixture<Lib460Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib460Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib460Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
