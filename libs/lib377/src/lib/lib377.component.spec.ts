import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib377Component } from './lib377.component';

describe('Lib377Component', () => {
  let component: Lib377Component;
  let fixture: ComponentFixture<Lib377Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib377Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib377Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
