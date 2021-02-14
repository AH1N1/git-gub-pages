import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarHeavyComponent } from './nav-bar-heavy.component';

describe('NavBarHeavyComponent', () => {
  let component: NavBarHeavyComponent;
  let fixture: ComponentFixture<NavBarHeavyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavBarHeavyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBarHeavyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
