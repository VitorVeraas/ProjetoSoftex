const express = require('express');
const router = express.Router();
const UsuarioController = require('../controllers/UsuarioController');
const ClienteController = require('../controllers/ClienteController');
//const PedidoController = require('../controllers/PedidoController');
//const DetalhePedidoController = require('../controllers/DetalhePedidoController');
//const ProdutoController = require('../controllers/ProdutoController');

// Rotas de Usuario
router.post('/usuarios', UsuarioController.criarUsuario);
router.get('/usuarios', UsuarioController.listarUsuarios);

// Rotas de Cliente
router.post('/clientes', ClienteController.criarCliente);
router.get('/clientes', ClienteController.listarClientes);

// Rotas de Pedido
//router.post('/pedidos', PedidoController.createPedido);
//router.get('/pedidos', PedidoController.listarPedidos);

// Rotas de DetalhePedido
//router.post('/detalhespedido', DetalhePedidoController.createDetalhePedido);

// Rotas de Produto
//router.post('/produtos', ProdutoController.createProduto);

// Rotas de Categoria

module.exports = router;