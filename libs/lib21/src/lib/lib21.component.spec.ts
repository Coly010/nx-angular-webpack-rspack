import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib21Component } from './lib21.component';

describe('Lib21Component', () => {
  let component: Lib21Component;
  let fixture: ComponentFixture<Lib21Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib21Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
