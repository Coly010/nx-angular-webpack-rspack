import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib640Component } from './lib640.component';

describe('Lib640Component', () => {
  let component: Lib640Component;
  let fixture: ComponentFixture<Lib640Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib640Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib640Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
