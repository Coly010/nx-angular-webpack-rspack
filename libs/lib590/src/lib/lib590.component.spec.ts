import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib590Component } from './lib590.component';

describe('Lib590Component', () => {
  let component: Lib590Component;
  let fixture: ComponentFixture<Lib590Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib590Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib590Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
