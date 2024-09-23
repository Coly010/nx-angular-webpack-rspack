import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib479Component } from './lib479.component';

describe('Lib479Component', () => {
  let component: Lib479Component;
  let fixture: ComponentFixture<Lib479Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib479Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib479Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
