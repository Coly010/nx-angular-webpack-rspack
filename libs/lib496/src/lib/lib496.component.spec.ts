import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib496Component } from './lib496.component';

describe('Lib496Component', () => {
  let component: Lib496Component;
  let fixture: ComponentFixture<Lib496Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib496Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib496Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
