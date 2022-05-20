import mongoose from 'mongoose';

const ClienteSchema = new mongoose.Schema({
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
        required: true,
    },
    telefono: {
        type: String,
        length: 9,
        required: true,
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
