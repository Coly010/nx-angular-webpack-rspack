import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib421Component } from './lib421.component';

describe('Lib421Component', () => {
  let component: Lib421Component;
  let fixture: ComponentFixture<Lib421Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib421Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib421Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
