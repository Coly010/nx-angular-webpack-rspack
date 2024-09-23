import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib588Component } from './lib588.component';

describe('Lib588Component', () => {
  let component: Lib588Component;
  let fixture: ComponentFixture<Lib588Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib588Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib588Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
