import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib218Component } from './lib218.component';

describe('Lib218Component', () => {
  let component: Lib218Component;
  let fixture: ComponentFixture<Lib218Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib218Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib218Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
