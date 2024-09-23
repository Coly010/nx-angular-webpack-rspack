import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib469Component } from './lib469.component';

describe('Lib469Component', () => {
  let component: Lib469Component;
  let fixture: ComponentFixture<Lib469Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib469Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib469Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
