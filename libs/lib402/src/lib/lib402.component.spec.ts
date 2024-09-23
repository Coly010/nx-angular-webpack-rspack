import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib402Component } from './lib402.component';

describe('Lib402Component', () => {
  let component: Lib402Component;
  let fixture: ComponentFixture<Lib402Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib402Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib402Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
