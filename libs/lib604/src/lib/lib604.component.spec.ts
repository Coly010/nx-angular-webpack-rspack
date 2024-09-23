import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib604Component } from './lib604.component';

describe('Lib604Component', () => {
  let component: Lib604Component;
  let fixture: ComponentFixture<Lib604Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib604Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib604Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
