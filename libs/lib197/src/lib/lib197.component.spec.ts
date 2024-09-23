import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib197Component } from './lib197.component';

describe('Lib197Component', () => {
  let component: Lib197Component;
  let fixture: ComponentFixture<Lib197Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib197Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib197Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
