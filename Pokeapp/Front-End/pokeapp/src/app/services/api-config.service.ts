// api-config.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiConfigService {
  private apiUrl = 'http://localhost:8080'; // Remplacez par l'URL de votre API

  getApiUrl(): string {
    return this.apiUrl;
  }
}
