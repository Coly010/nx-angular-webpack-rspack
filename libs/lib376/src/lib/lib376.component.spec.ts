import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib376Component } from './lib376.component';

describe('Lib376Component', () => {
  let component: Lib376Component;
  let fixture: ComponentFixture<Lib376Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib376Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib376Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
