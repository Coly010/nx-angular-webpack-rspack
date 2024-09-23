import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib713Component } from './lib713.component';

describe('Lib713Component', () => {
  let component: Lib713Component;
  let fixture: ComponentFixture<Lib713Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib713Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib713Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
