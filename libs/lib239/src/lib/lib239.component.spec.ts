import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib239Component } from './lib239.component';

describe('Lib239Component', () => {
  let component: Lib239Component;
  let fixture: ComponentFixture<Lib239Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib239Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib239Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
