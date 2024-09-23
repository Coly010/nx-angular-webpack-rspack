import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib606Component } from './lib606.component';

describe('Lib606Component', () => {
  let component: Lib606Component;
  let fixture: ComponentFixture<Lib606Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib606Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib606Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
