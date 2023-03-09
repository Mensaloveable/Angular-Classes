//For Change Detection
/* import { enableProdMode } from '@angular/core'; */
//JIT
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
//For production check (true or false)
import { environment } from './environments/environment';

/* if (environment.production) {
  enableProdMode();
} */

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
