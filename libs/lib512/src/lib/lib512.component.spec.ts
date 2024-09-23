import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib512Component } from './lib512.component';

describe('Lib512Component', () => {
  let component: Lib512Component;
  let fixture: ComponentFixture<Lib512Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib512Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib512Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
