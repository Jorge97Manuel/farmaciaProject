import { Produto } from './../model/produto.model';

export const PRODUTO: Produto[] = [
    { id: 1, descricao: 'Paracitamol 250ml', quantidade: 10, preco: 250, dataFabrico: '23-02-2010', dataCaducidade: '22-11-2021', fornecedor: { id: 4, nome: 'LuFarm', telefone: 929635271, email: 'farmlub@gmail.com', nif: '73476HA02', status: true } },
    { id: 2, descricao: 'Dipirona 250ml', quantidade: 100, preco: 150, dataFabrico: '10-02-2018', dataCaducidade: '22-11-2024', fornecedor: {id: 3, nome: 'LDAF', telefone: 910195723, email: 'ldaf@hotmail.com', nif: '73476HA02', status: false} }

]; 
