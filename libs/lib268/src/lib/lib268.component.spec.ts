import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib268Component } from './lib268.component';

describe('Lib268Component', () => {
  let component: Lib268Component;
  let fixture: ComponentFixture<Lib268Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib268Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib268Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
