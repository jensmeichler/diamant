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
    component: ContactComponent
  },
];
