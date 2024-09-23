import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib683Component } from './lib683.component';

describe('Lib683Component', () => {
  let component: Lib683Component;
  let fixture: ComponentFixture<Lib683Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib683Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib683Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
