import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib458Component } from './lib458.component';

describe('Lib458Component', () => {
  let component: Lib458Component;
  let fixture: ComponentFixture<Lib458Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib458Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib458Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
