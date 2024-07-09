import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideImageComponent } from './side-image.component';

describe('SideImageComponent', () => {
  let component: SideImageComponent;
  let fixture: ComponentFixture<SideImageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SideImageComponent]
    });
    fixture = TestBed.createComponent(SideImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
