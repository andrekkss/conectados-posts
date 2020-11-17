import { Document, model, Schema } from "mongoose"

const postSchema = new Schema({
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

export interface IPost extends Document {
    Cidade:  string,
    Cordenadas: {
        lon: string ,
        lat: string 
    },
    Clima:  string,
    Descricao: string,
    temperatura: string,
    pressao: string,
    tempMin: string,     
    tempMax: string,
    cidade: string,
    pais: string
}

export default model<IPost>('Post', postSchema);
