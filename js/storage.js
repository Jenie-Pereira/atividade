// js/modules/storage.js

const STORAGE_KEY = 'app_usuarios_registrados';

/**
 * Recupera os dados salvos no localStorage convertendo de string para objeto/array
 */
export function getStoredData() {
  const rawData = localStorage.getItem(STORAGE_KEY);
  return rawData ? JSON.parse(rawData) : [];
}

/**
 * Converte a estrutura de dados para string e grava no localStorage
 */
export function saveFormData(newData) {
  const currentData = getStoredData();
  currentData.push(newData);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(currentData));
}