import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib46Component } from './lib46.component';

describe('Lib46Component', () => {
  let component: Lib46Component;
  let fixture: ComponentFixture<Lib46Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib46Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib46Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
