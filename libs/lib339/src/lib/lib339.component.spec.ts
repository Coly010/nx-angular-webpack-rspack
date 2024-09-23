import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib339Component } from './lib339.component';

describe('Lib339Component', () => {
  let component: Lib339Component;
  let fixture: ComponentFixture<Lib339Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib339Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib339Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
