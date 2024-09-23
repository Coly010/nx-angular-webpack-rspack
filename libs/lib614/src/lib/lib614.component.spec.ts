import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib614Component } from './lib614.component';

describe('Lib614Component', () => {
  let component: Lib614Component;
  let fixture: ComponentFixture<Lib614Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib614Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib614Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
