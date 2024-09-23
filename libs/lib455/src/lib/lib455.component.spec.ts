import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib455Component } from './lib455.component';

describe('Lib455Component', () => {
  let component: Lib455Component;
  let fixture: ComponentFixture<Lib455Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib455Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib455Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
