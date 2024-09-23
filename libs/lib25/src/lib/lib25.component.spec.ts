import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib25Component } from './lib25.component';

describe('Lib25Component', () => {
  let component: Lib25Component;
  let fixture: ComponentFixture<Lib25Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib25Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
