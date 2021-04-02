import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderPrivateComponent } from './header-private.component';

xdescribe('HeaderPrivateComponent', () => {
  let component: HeaderPrivateComponent;
  let fixture: ComponentFixture<HeaderPrivateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderPrivateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderPrivateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
