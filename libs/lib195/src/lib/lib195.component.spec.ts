import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib195Component } from './lib195.component';

describe('Lib195Component', () => {
  let component: Lib195Component;
  let fixture: ComponentFixture<Lib195Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib195Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib195Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
