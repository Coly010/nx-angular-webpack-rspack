import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib233Component } from './lib233.component';

describe('Lib233Component', () => {
  let component: Lib233Component;
  let fixture: ComponentFixture<Lib233Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib233Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib233Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
