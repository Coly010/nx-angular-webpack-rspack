import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib656Component } from './lib656.component';

describe('Lib656Component', () => {
  let component: Lib656Component;
  let fixture: ComponentFixture<Lib656Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib656Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib656Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
