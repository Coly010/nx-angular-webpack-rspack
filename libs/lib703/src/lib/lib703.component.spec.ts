import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib703Component } from './lib703.component';

describe('Lib703Component', () => {
  let component: Lib703Component;
  let fixture: ComponentFixture<Lib703Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib703Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib703Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
