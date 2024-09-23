import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib155Component } from './lib155.component';

describe('Lib155Component', () => {
  let component: Lib155Component;
  let fixture: ComponentFixture<Lib155Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib155Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib155Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
