import { TestBed } from '@angular/core/testing';

import { CompartirNoticiaService } from './compartir-noticia.service';

describe('CompartirNoticiaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CompartirNoticiaService = TestBed.get(CompartirNoticiaService);
    expect(service).toBeTruthy();
  });
});
