import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib428Component } from './lib428.component';

describe('Lib428Component', () => {
  let component: Lib428Component;
  let fixture: ComponentFixture<Lib428Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib428Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib428Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
