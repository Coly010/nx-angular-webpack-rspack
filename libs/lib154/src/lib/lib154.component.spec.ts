import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib154Component } from './lib154.component';

describe('Lib154Component', () => {
  let component: Lib154Component;
  let fixture: ComponentFixture<Lib154Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib154Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib154Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
