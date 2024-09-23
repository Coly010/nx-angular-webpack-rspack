import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib317Component } from './lib317.component';

describe('Lib317Component', () => {
  let component: Lib317Component;
  let fixture: ComponentFixture<Lib317Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib317Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib317Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
