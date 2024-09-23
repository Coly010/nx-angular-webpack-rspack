import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib503Component } from './lib503.component';

describe('Lib503Component', () => {
  let component: Lib503Component;
  let fixture: ComponentFixture<Lib503Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib503Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib503Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
