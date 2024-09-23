import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib136Component } from './lib136.component';

describe('Lib136Component', () => {
  let component: Lib136Component;
  let fixture: ComponentFixture<Lib136Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib136Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib136Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
