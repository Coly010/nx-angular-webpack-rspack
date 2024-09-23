import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib735Component } from './lib735.component';

describe('Lib735Component', () => {
  let component: Lib735Component;
  let fixture: ComponentFixture<Lib735Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib735Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib735Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
