import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib580Component } from './lib580.component';

describe('Lib580Component', () => {
  let component: Lib580Component;
  let fixture: ComponentFixture<Lib580Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib580Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib580Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
