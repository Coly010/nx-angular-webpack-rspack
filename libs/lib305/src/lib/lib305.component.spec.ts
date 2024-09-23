import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib305Component } from './lib305.component';

describe('Lib305Component', () => {
  let component: Lib305Component;
  let fixture: ComponentFixture<Lib305Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib305Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib305Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
