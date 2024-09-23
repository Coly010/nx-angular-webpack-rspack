import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib553Component } from './lib553.component';

describe('Lib553Component', () => {
  let component: Lib553Component;
  let fixture: ComponentFixture<Lib553Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib553Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib553Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
