import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib554Component } from './lib554.component';

describe('Lib554Component', () => {
  let component: Lib554Component;
  let fixture: ComponentFixture<Lib554Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib554Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib554Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
