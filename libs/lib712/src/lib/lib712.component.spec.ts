import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib712Component } from './lib712.component';

describe('Lib712Component', () => {
  let component: Lib712Component;
  let fixture: ComponentFixture<Lib712Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib712Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib712Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
