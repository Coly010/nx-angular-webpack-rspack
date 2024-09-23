import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib352Component } from './lib352.component';

describe('Lib352Component', () => {
  let component: Lib352Component;
  let fixture: ComponentFixture<Lib352Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib352Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib352Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
