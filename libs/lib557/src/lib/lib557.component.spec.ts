import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib557Component } from './lib557.component';

describe('Lib557Component', () => {
  let component: Lib557Component;
  let fixture: ComponentFixture<Lib557Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib557Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib557Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
