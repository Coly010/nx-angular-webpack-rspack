import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib259Component } from './lib259.component';

describe('Lib259Component', () => {
  let component: Lib259Component;
  let fixture: ComponentFixture<Lib259Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib259Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib259Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
