import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib576Component } from './lib576.component';

describe('Lib576Component', () => {
  let component: Lib576Component;
  let fixture: ComponentFixture<Lib576Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib576Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib576Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
