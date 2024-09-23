import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib61Component } from './lib61.component';

describe('Lib61Component', () => {
  let component: Lib61Component;
  let fixture: ComponentFixture<Lib61Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib61Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib61Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
