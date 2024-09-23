import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib321Component } from './lib321.component';

describe('Lib321Component', () => {
  let component: Lib321Component;
  let fixture: ComponentFixture<Lib321Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib321Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib321Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
