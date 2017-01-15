import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module';


// register LocalStorage, this registers our change-detection.
platformBrowserDynamic().bootstrapModule(AppModule);
