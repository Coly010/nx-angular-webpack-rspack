import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib630Component } from './lib630.component';

describe('Lib630Component', () => {
  let component: Lib630Component;
  let fixture: ComponentFixture<Lib630Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib630Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib630Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
