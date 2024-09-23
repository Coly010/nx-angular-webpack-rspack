import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib773Component } from './lib773.component';

describe('Lib773Component', () => {
  let component: Lib773Component;
  let fixture: ComponentFixture<Lib773Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib773Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib773Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
