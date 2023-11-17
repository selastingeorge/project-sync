import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getAnalytics, provideAnalytics, ScreenTrackingService, UserTrackingService } from '@angular/fire/analytics';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { environment } from '../environments/environment';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), importProvidersFrom(provideFirebaseApp(() => initializeApp({ "projectId": "project-sync-22445", "appId": "1:842867775881:web:7308e39df77dfa770ee958", "storageBucket": "project-sync-22445.appspot.com", "apiKey": "AIzaSyCwUfjO47LaVR9MLY95MEqaACy4koJtvyU", "authDomain": "project-sync-22445.firebaseapp.com", "messagingSenderId": "842867775881", "measurementId": "G-LWF9D1RSZ0" }))), importProvidersFrom(provideAuth(() => getAuth())), importProvidersFrom(provideAnalytics(() => getAnalytics())), ScreenTrackingService, UserTrackingService, importProvidersFrom(provideDatabase(() => getDatabase())),{ provide: FIREBASE_OPTIONS, useValue: environment.firebase }]
};
