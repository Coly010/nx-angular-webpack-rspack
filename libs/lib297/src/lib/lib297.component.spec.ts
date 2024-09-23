import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib297Component } from './lib297.component';

describe('Lib297Component', () => {
  let component: Lib297Component;
  let fixture: ComponentFixture<Lib297Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib297Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib297Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
