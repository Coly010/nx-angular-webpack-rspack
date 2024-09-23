import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib615Component } from './lib615.component';

describe('Lib615Component', () => {
  let component: Lib615Component;
  let fixture: ComponentFixture<Lib615Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib615Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib615Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
