import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib578Component } from './lib578.component';

describe('Lib578Component', () => {
  let component: Lib578Component;
  let fixture: ComponentFixture<Lib578Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib578Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib578Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
