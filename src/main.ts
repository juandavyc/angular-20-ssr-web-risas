
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { registerLocaleData } from '@angular/common';

import localeEsCo from '@angular/common/locales/es-CO';
import localeEsCoExtra from '@angular/common/locales/extra/es-CO';

registerLocaleData(localeEsCo, 'es-CO', localeEsCoExtra);

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
