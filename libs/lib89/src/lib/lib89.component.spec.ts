import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib89Component } from './lib89.component';

describe('Lib89Component', () => {
  let component: Lib89Component;
  let fixture: ComponentFixture<Lib89Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib89Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib89Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
