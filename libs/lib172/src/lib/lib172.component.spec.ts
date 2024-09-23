import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib172Component } from './lib172.component';

describe('Lib172Component', () => {
  let component: Lib172Component;
  let fixture: ComponentFixture<Lib172Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib172Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib172Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
