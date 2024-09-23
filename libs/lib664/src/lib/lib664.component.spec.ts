import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib664Component } from './lib664.component';

describe('Lib664Component', () => {
  let component: Lib664Component;
  let fixture: ComponentFixture<Lib664Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib664Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib664Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
