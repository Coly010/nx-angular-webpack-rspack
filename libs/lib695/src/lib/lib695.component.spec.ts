import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib695Component } from './lib695.component';

describe('Lib695Component', () => {
  let component: Lib695Component;
  let fixture: ComponentFixture<Lib695Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib695Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib695Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
