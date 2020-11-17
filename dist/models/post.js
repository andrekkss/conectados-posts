"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const postSchema = new mongoose_1.Schema({
    Cidade: {
        type: String,
        require: true
    },
    Cordenadas: {
        lon: { type: String },
        lat: { type: String }
    },
    Clima: {
        type: String,
        require: true,
    },
    Descricao: {
        type: String,
        require: true,
    },
    temperatura: {
        type: String,
        require: true
    },
    pressao: {
        type: String,
        require: true
    },
    tempMin: {
        type: String,
        require: true
    },
    tempMax: {
        type: String,
        require: true
    },
    cidade: {
        type: String,
        require: true
    },
    pais: {
        type: String,
        require: true
    }
});
exports.default = mongoose_1.model('Post', postSchema);
