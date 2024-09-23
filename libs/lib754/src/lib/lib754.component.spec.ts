import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib754Component } from './lib754.component';

describe('Lib754Component', () => {
  let component: Lib754Component;
  let fixture: ComponentFixture<Lib754Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib754Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib754Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
