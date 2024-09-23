import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib765Component } from './lib765.component';

describe('Lib765Component', () => {
  let component: Lib765Component;
  let fixture: ComponentFixture<Lib765Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib765Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib765Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
