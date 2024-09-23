import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib380Component } from './lib380.component';

describe('Lib380Component', () => {
  let component: Lib380Component;
  let fixture: ComponentFixture<Lib380Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib380Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib380Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
