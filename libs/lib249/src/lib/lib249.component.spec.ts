import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib249Component } from './lib249.component';

describe('Lib249Component', () => {
  let component: Lib249Component;
  let fixture: ComponentFixture<Lib249Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib249Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib249Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
