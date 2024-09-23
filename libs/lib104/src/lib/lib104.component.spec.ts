import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib104Component } from './lib104.component';

describe('Lib104Component', () => {
  let component: Lib104Component;
  let fixture: ComponentFixture<Lib104Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib104Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib104Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
