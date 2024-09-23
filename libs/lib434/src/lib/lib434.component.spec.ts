import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib434Component } from './lib434.component';

describe('Lib434Component', () => {
  let component: Lib434Component;
  let fixture: ComponentFixture<Lib434Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib434Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib434Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
