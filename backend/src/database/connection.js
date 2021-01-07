const mongoose = require('mongoose');

// Conexão com o DB
mongoose.connect('mongodb://localhost/mymoney', { useNewUrlParser: true, useFindAndModify: false, useUnifiedTopology: true });

// Padrão para todo projeto que criarmos. Desabilita mensagem de advertência de depreciação
mongoose.Promise = global.Promise;

// exportando para ser acessível nos requerimentos
module.exports = mongoose;

// MESSAGES ERRORS
mongoose.Error.messages.general.required = "O atributo '{PATH}' é obrigatório."
mongoose.Error.messages.Number.min = "O '{VALUE}' informado é menor que o limite mínimo de '{MIN}'."
mongoose.Error.messages.Number.max = "O '{VALUE}' informado é maior que o limite máximo de '{MAX}'."
mongoose.Error.messages.String.enum = "O '{VALUE}' não é válido para o atributo '{PATH}'."