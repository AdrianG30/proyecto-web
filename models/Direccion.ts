import mongoose from 'mongoose';

const DireccionSchema = new mongoose.Schema({
    cliente: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Cliente',
    },
});

export default mongoose.models.Direccion ||
    mongoose.model('Direccion', DireccionSchema, 'direcciones');
