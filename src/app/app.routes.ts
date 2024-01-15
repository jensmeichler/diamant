import {Routes} from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () =>
      import('./pages/home/home.component')
        .then(x => x.HomeComponent)
  },
  {
    path: 'behandlungen',
    loadComponent: () =>
      import('./pages/treatments/treatments.component')
        .then(x => x.TreatmentsComponent)
  },
  {
    path: 'produkte',
    loadComponent: () =>
      import('./pages/products/products.component')
        .then(x => x.ProductsComponent)
  },
  {
    path: 'beratung',
    loadComponent: () =>
      import('./pages/consulting/consulting.component')
        .then(x => x.ConsultingComponent)
  },
  {
    path: 'kontakt',
    loadComponent: () =>
      import('./pages/contact/contact.component')
        .then(x => x.ContactComponent)
  },
];
