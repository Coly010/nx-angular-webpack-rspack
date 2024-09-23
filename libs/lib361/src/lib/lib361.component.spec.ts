import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib361Component } from './lib361.component';

describe('Lib361Component', () => {
  let component: Lib361Component;
  let fixture: ComponentFixture<Lib361Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib361Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib361Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
