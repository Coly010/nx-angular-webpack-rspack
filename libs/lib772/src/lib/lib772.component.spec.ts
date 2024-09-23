import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib772Component } from './lib772.component';

describe('Lib772Component', () => {
  let component: Lib772Component;
  let fixture: ComponentFixture<Lib772Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib772Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib772Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
