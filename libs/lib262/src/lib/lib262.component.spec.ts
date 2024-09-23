import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib262Component } from './lib262.component';

describe('Lib262Component', () => {
  let component: Lib262Component;
  let fixture: ComponentFixture<Lib262Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib262Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib262Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
