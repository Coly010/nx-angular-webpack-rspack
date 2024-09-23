import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib271Component } from './lib271.component';

describe('Lib271Component', () => {
  let component: Lib271Component;
  let fixture: ComponentFixture<Lib271Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib271Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib271Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
