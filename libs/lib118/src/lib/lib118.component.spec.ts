import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib118Component } from './lib118.component';

describe('Lib118Component', () => {
  let component: Lib118Component;
  let fixture: ComponentFixture<Lib118Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib118Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib118Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
