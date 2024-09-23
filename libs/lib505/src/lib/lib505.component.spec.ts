import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib505Component } from './lib505.component';

describe('Lib505Component', () => {
  let component: Lib505Component;
  let fixture: ComponentFixture<Lib505Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib505Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib505Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
