import {Routes} from '@angular/router';
import {HomeComponent} from "src/app/pages/home/home.component";
import {ContactComponent} from "src/app/pages/contact/contact.component";

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent
  },
  {
    path: 'behandlungen',
    loadComponent: () =>
      import('src/app/pages/treatments/treatments.component')
        .then(m => m.TreatmentsComponent),
  },
  {
    path: 'behandlungen/gesichtsbehandlung',
    loadComponent: () =>
      import('src/app/pages/treatments-face/treatments-face.component')
        .then(m => m.TreatmentsFaceComponent),
  },
  {
    path: 'behandlungen/massagen',
    loadComponent: () =>
      import('src/app/pages/treatments-massage/treatments-massage.component')
        .then(m => m.TreatmentsMassageComponent),
  },
  {
    path: 'behandlungen/wellnesspakete',
    loadComponent: () =>
      import('src/app/pages/treatments-wellness/treatments-wellness.component')
        .then(m => m.TreatmentsWellnessComponent),
  },
  {
    path: 'produkte',
    loadComponent: () =>
      import('src/app/pages/products/products.component')
        .then(m => m.ProductsComponent),
  },
  {
    path: 'beratung',
    loadComponent: () =>
      import('src/app/pages/consulting/consulting.component')
        .then(m => m.ConsultingComponent),
  },
  {
    path: 'kontakt',
    component: ContactComponent
  },
  {
    path: 'sitemap',
    loadComponent: () =>
      import('src/app/pages/sitemap/sitemap.component')
        .then(m => m.SitemapComponent),
  },
  {
    path: 'impressum',
    loadComponent: () =>
      import('src/app/pages/imprint/imprint.component')
        .then(m => m.ImprintComponent),
  },
  {
    path: '**',
    loadComponent: () =>
      import('src/app/pages/not-found/not-found.component')
        .then(m => m.NotFoundComponent),
  }
];
