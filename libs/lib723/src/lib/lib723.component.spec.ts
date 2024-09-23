import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib723Component } from './lib723.component';

describe('Lib723Component', () => {
  let component: Lib723Component;
  let fixture: ComponentFixture<Lib723Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib723Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib723Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
