import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

// 1. program starts here
if (environment.production) {
  enableProdMode();
}

// 2. load Appmodule next.
platformBrowserDynamic().bootstrapModule(AppModule) // load Appmodule next.
  .catch(err => console.log(err));
