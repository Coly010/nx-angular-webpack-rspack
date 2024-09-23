import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib790Component } from './lib790.component';

describe('Lib790Component', () => {
  let component: Lib790Component;
  let fixture: ComponentFixture<Lib790Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib790Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib790Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
