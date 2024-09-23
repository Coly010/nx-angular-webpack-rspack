import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib111Component } from './lib111.component';

describe('Lib111Component', () => {
  let component: Lib111Component;
  let fixture: ComponentFixture<Lib111Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib111Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib111Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
