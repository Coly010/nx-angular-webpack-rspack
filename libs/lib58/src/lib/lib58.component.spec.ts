import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib58Component } from './lib58.component';

describe('Lib58Component', () => {
  let component: Lib58Component;
  let fixture: ComponentFixture<Lib58Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib58Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib58Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
