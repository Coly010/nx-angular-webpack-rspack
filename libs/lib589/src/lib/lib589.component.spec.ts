import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib589Component } from './lib589.component';

describe('Lib589Component', () => {
  let component: Lib589Component;
  let fixture: ComponentFixture<Lib589Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib589Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib589Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
