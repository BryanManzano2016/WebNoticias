import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionNoticiasComponent } from './seccion-noticias.component';

describe('SeccionNoticiasComponent', () => {
  let component: SeccionNoticiasComponent;
  let fixture: ComponentFixture<SeccionNoticiasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeccionNoticiasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeccionNoticiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
