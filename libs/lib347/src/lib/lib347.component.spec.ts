import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib347Component } from './lib347.component';

describe('Lib347Component', () => {
  let component: Lib347Component;
  let fixture: ComponentFixture<Lib347Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib347Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib347Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
