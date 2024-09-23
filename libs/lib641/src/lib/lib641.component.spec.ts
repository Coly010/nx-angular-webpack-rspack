import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib641Component } from './lib641.component';

describe('Lib641Component', () => {
  let component: Lib641Component;
  let fixture: ComponentFixture<Lib641Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib641Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib641Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
