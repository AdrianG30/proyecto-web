import mongoose from 'mongoose';

const ClienteSchema = new mongoose.Schema({
    _id: {
        type: String,
        unique: true,
        required: true,
    },
    direcciones: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Direccion',
        },
    ],
    nombre: {
        type: String,
        minlength: 3,
        maxlength: 50,
        required: true,
    },
    apellido: {
        type: String,
        minlength: 3,
        maxlength: 50,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
    },
    telefono: {
        type: String,
        length: 9,
    },
    imagenUrl: {
        type: String,
    },
    fechaRegistro: {
        type: Date,
        default: Date.now,
        required: true,
    },
    estado: {
        type: String,
        enum: ['ACTIVO', 'INACTIVO'],
        default: 'ACTIVO',
        required: true,
    },
});

export default mongoose.models.Cliente || mongoose.model('Cliente', ClienteSchema, 'clientes');
