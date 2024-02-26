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
      import(/* webpackChunkName: "chunk_treatments" */ 'src/app/pages/treatments/treatments.component')
        .then(m => m.TreatmentsComponent),
  },
  {
    path: 'behandlungen/gesichtsbehandlung',
    loadComponent: () =>
      import(/* webpackChunkName: "chunk_treatments-face" */ 'src/app/pages/treatments-face/treatments-face.component')
        .then(m => m.TreatmentsFaceComponent),
  },
  {
    path: 'behandlungen/massagen',
    loadComponent: () =>
      import(/* webpackChunkName: "chunk_treatments-massage" */ 'src/app/pages/treatments-massage/treatments-massage.component')
        .then(m => m.TreatmentsMassageComponent),
  },
  {
    path: 'behandlungen/wellnesspakete',
    loadComponent: () =>
      import(/* webpackChunkName: "chunk_treatments-wellness" */ 'src/app/pages/treatments-wellness/treatments-wellness.component')
        .then(m => m.TreatmentsWellnessComponent),
  },
  {
    path: 'produkte',
    loadComponent: () =>
      import(/* webpackChunkName: "chunk_products" */ 'src/app/pages/products/products.component')
        .then(m => m.ProductsComponent),
  },
  {
    path: 'beratung',
    loadComponent: () =>
      import(/* webpackChunkName: "chunk_consulting" */ 'src/app/pages/consulting/consulting.component')
        .then(m => m.ConsultingComponent),
  },
  {
    path: 'kontakt',
    component: ContactComponent
  },
  {
    path: 'sitemap',
    loadComponent: () =>
      import(/* webpackChunkName: "chunk_sitemap" */ 'src/app/pages/sitemap/sitemap.component')
        .then(m => m.SitemapComponent),
  },
  {
    path: 'impressum',
    loadComponent: () =>
      import(/* webpackChunkName: "chunk_imprint" */ 'src/app/pages/imprint/imprint.component')
        .then(m => m.ImprintComponent),
  },
  {
    path: '**',
    loadComponent: () =>
      import(/* webpackChunkName: "chunk_not-found" */ 'src/app/pages/not-found/not-found.component')
        .then(m => m.NotFoundComponent),
  }
];
