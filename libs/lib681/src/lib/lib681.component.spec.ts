import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib681Component } from './lib681.component';

describe('Lib681Component', () => {
  let component: Lib681Component;
  let fixture: ComponentFixture<Lib681Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib681Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib681Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
