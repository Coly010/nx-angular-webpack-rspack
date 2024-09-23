import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib300Component } from './lib300.component';

describe('Lib300Component', () => {
  let component: Lib300Component;
  let fixture: ComponentFixture<Lib300Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib300Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib300Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
