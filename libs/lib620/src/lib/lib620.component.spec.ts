import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib620Component } from './lib620.component';

describe('Lib620Component', () => {
  let component: Lib620Component;
  let fixture: ComponentFixture<Lib620Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib620Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib620Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
