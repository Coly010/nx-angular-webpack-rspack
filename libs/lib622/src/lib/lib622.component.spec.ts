import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib622Component } from './lib622.component';

describe('Lib622Component', () => {
  let component: Lib622Component;
  let fixture: ComponentFixture<Lib622Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib622Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib622Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
