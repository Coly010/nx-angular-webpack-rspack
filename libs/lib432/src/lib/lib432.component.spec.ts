import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib432Component } from './lib432.component';

describe('Lib432Component', () => {
  let component: Lib432Component;
  let fixture: ComponentFixture<Lib432Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib432Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib432Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
