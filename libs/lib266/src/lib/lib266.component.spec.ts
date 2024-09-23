import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib266Component } from './lib266.component';

describe('Lib266Component', () => {
  let component: Lib266Component;
  let fixture: ComponentFixture<Lib266Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib266Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib266Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
