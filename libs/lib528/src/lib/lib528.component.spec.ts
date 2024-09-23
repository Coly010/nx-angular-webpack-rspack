import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib528Component } from './lib528.component';

describe('Lib528Component', () => {
  let component: Lib528Component;
  let fixture: ComponentFixture<Lib528Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib528Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib528Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
