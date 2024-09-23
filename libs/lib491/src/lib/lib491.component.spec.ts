import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib491Component } from './lib491.component';

describe('Lib491Component', () => {
  let component: Lib491Component;
  let fixture: ComponentFixture<Lib491Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib491Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib491Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
