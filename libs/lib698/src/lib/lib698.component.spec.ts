import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib698Component } from './lib698.component';

describe('Lib698Component', () => {
  let component: Lib698Component;
  let fixture: ComponentFixture<Lib698Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib698Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib698Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
