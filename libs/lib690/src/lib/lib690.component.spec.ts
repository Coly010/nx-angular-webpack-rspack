import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib690Component } from './lib690.component';

describe('Lib690Component', () => {
  let component: Lib690Component;
  let fixture: ComponentFixture<Lib690Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib690Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib690Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
