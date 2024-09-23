import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib389Component } from './lib389.component';

describe('Lib389Component', () => {
  let component: Lib389Component;
  let fixture: ComponentFixture<Lib389Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib389Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib389Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
