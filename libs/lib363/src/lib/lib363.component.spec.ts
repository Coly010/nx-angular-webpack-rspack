import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib363Component } from './lib363.component';

describe('Lib363Component', () => {
  let component: Lib363Component;
  let fixture: ComponentFixture<Lib363Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib363Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib363Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
