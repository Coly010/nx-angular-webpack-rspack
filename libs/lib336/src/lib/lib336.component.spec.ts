import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib336Component } from './lib336.component';

describe('Lib336Component', () => {
  let component: Lib336Component;
  let fixture: ComponentFixture<Lib336Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib336Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib336Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
