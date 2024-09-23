import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib341Component } from './lib341.component';

describe('Lib341Component', () => {
  let component: Lib341Component;
  let fixture: ComponentFixture<Lib341Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib341Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib341Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
