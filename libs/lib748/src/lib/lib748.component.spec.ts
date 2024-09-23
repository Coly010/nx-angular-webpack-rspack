import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib748Component } from './lib748.component';

describe('Lib748Component', () => {
  let component: Lib748Component;
  let fixture: ComponentFixture<Lib748Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib748Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib748Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
