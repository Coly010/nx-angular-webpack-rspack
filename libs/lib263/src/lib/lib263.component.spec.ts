import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib263Component } from './lib263.component';

describe('Lib263Component', () => {
  let component: Lib263Component;
  let fixture: ComponentFixture<Lib263Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib263Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib263Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
