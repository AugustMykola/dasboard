import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getDatabase, provideDatabase } from '@angular/fire/database';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideAnimationsAsync(), provideFirebaseApp(() => initializeApp({"projectId":"test-task-dashboard","appId":"1:804390132141:web:b8d91be3e36bfae0c9a924","storageBucket":"test-task-dashboard.appspot.com","apiKey":"AIzaSyDGBjbt1pasUfs0mj4JHG-ANbzp0nq2b6I","authDomain":"test-task-dashboard.firebaseapp.com","messagingSenderId":"804390132141","measurementId":"G-DFDZXHM2C1"})), provideDatabase(() => getDatabase())]
};
