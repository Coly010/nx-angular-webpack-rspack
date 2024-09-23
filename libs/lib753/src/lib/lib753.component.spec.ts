import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib753Component } from './lib753.component';

describe('Lib753Component', () => {
  let component: Lib753Component;
  let fixture: ComponentFixture<Lib753Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib753Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib753Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
