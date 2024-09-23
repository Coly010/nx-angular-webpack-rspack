import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib714Component } from './lib714.component';

describe('Lib714Component', () => {
  let component: Lib714Component;
  let fixture: ComponentFixture<Lib714Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib714Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib714Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
