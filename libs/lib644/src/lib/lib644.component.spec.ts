import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib644Component } from './lib644.component';

describe('Lib644Component', () => {
  let component: Lib644Component;
  let fixture: ComponentFixture<Lib644Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib644Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib644Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
