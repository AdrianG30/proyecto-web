import { FC } from 'react';
import axios from 'axios';
import { format } from 'date-fns';
import Layout from '../../../components/Layout';
import { IMultipleResource } from '../../../interfaces/api-responses/IMultipleResource';
import { IProducto } from '../../../interfaces/IProducto';
import Image from 'next/image';

interface ProductoTablaProps {
    productos: IProducto[];
}

const ProductoTabla: FC<ProductoTablaProps> = ({ productos }) => {
    const filasProducto = productos.map((producto) => (
        <tr key={producto._id}>
            <td>{producto.nombre}</td>
            <td>
                <Image
                    className="img-thumbnail"
                    src={producto.imagenUrl}
                    alt="Producto Imagen"
                    width={300}
                    height={300}
                    layout="responsive"
                />
            </td>
            <td>{`S/. ${producto.precio}`}</td>
            <td>{producto.stock}</td>
            <td>{producto.categoria.nombre}</td>
            <td>{format(Date.parse(producto.fechaRegistro), 'dd/MM/yyyy')}</td>
            <td>
                <button className="btn btn-success me-2">Editar</button>
                <button className="btn btn-outline-danger">Eliminar</button>
            </td>
        </tr>
    ));

    return (
        <Layout>
            <div>
                <h5>Productos ({productos.length})</h5>
                <table className="table table-bordered table-striped">
                    <thead className="thead-light">
                        <tr>
                            <th scope="col">Nombre</th>
                            <th scope="col">Imagen</th>
                            <th scope="col">Precio</th>
                            <th scope="col">Stock</th>
                            <th scope="col">Categoria</th>
                            <th scope="col">F.Registro</th>
                            <th scope="col">Opciones</th>
                        </tr>
                    </thead>
                    <tbody>{filasProducto}</tbody>
                </table>
            </div>
        </Layout>
    );
};

export default ProductoTabla;

export const getServerSideProps = async () => {
    const res = await axios.get<IMultipleResource<IProducto>>(
        'http://localhost:3000/api/v1/productos'
    );
    const productos = res.data.data;

    return { props: { productos } };
};
