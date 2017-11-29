import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZenCategoryComponent } from './zen-category.component';

describe('ZenCategoryComponent', () => {
  let component: ZenCategoryComponent;
  let fixture: ComponentFixture<ZenCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZenCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZenCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
