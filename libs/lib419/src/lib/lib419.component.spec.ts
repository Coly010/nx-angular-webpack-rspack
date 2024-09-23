import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib419Component } from './lib419.component';

describe('Lib419Component', () => {
  let component: Lib419Component;
  let fixture: ComponentFixture<Lib419Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib419Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib419Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
