import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib301Component } from './lib301.component';

describe('Lib301Component', () => {
  let component: Lib301Component;
  let fixture: ComponentFixture<Lib301Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib301Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib301Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
