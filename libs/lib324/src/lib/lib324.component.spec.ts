import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib324Component } from './lib324.component';

describe('Lib324Component', () => {
  let component: Lib324Component;
  let fixture: ComponentFixture<Lib324Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib324Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib324Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
