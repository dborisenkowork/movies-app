import {TestBed} from '@angular/core/testing';
import {NO_ERRORS_SCHEMA} from '@angular/core';

import {AppRootComponent} from './AppRoot.component';

describe('MoviesApp/components/AppRoot', () => {
   beforeEach(() => {
       TestBed.configureTestingModule({
           declarations: [
               AppRootComponent,
           ],
           schemas: [
               NO_ERRORS_SCHEMA,
           ],
       }).compileComponents();
   });

   it('component exists', () => {
       expect(TestBed.createComponent(AppRootComponent).componentInstance).toBeDefined();
   });
});
