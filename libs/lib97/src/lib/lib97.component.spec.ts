import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib97Component } from './lib97.component';

describe('Lib97Component', () => {
  let component: Lib97Component;
  let fixture: ComponentFixture<Lib97Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib97Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib97Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
