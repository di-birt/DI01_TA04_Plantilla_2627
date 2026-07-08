//TODO - importamos computed y signal
import { Component, computed, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import {
  IonHeader, IonToolbar, IonTitle, IonContent, IonFooter,
  IonList, IonItem, IonLabel, IonButton, IonInput,
  ToastController
} from '@ionic/angular/standalone';
import { Elemento } from '../models/elemento.model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [
    IonHeader, IonToolbar, IonTitle, IonContent, IonFooter,
    IonList, IonItem, IonLabel, IonButton, IonInput
  ],
})
export class HomePage {
  // TODO
  // Signal: almacena el texto del campo de búsqueda.
  // Inicializar el signal que contenga strings con valor inicial ''.
  busqueda = null;

  // TODO
  // Signal: almacena la lista de elementos.
  // Al ser un signal, cualquier computed que lo use se recalculará automáticamente
  // cuando el array cambie (p.ej. si añadimos o eliminamos elementos).
  // elementos = Elemento[]
  elementos = null;

  // TODO
  // Computed: se recalcula automáticamente cuando cambia el signal "elementos".
  // Equivale al getter anterior, pero Angular solo lo recalcula si su dependencia cambia.
  // Quitamos el método get hayElementos(): boolean
  hayElementos = null;

  // TODO
  // Computed: depende de AMBOS signals (busqueda y elementos).
  // Cada vez que el usuario escribe en el input o cambia la lista,
  // Angular recalcula este valor de forma eficiente.
  // Quitamos el método get elementosFiltrados(): Elemento[]
  elementosFiltrados = computed<Elemento[]>(() => {
    //Guardamos el valor que contiene el signal busqueda
    const texto = null;
    //Si texto no es nulo devolvemos el signal elementos
    
    //TODO modificar this.busqueda.toLowerCase por texto
    //Devolvemos el Signal<Elemento[]> con los elementos que coincidan con el texto
    //Para esto, haremos uso de filter y compararemos el nombre del elemento con el texto, mediante includes.
    //Recomendable hacer uso de elemento.nombre.toLoweCase(), para que podamos en la búsqueda p.e texto = "angular" y encuentre correctamente.
    //Si no hacemos uso de toLowerCase() habrá que meter mayúsculas y minúsculas igual que el nombre.
    return [];
  });

  private router = inject(Router);
  private toastController = inject(ToastController);
  constructor() {};

  // TODO (Apartado 2 – Navegación): Navegar a /detalle con el elemento seleccionado
  verDetalle(elementoHome: Elemento): void {
    this.router.navigate(['/detalle'], { state: { elementoHome } });
  }

  // TODO (Apartado 1 + 3 – Event Binding): Mostrar un ion-toast al pulsar el botón
  async mostrarToast(): Promise<void> {
    // Consulta la teoría: apartado "ion-toast vs ion-alert"
    
    
  }
}
