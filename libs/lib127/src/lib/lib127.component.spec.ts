import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib127Component } from './lib127.component';

describe('Lib127Component', () => {
  let component: Lib127Component;
  let fixture: ComponentFixture<Lib127Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib127Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib127Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
