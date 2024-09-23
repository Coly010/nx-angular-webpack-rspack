import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib340Component } from './lib340.component';

describe('Lib340Component', () => {
  let component: Lib340Component;
  let fixture: ComponentFixture<Lib340Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib340Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib340Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
