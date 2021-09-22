import { useParams } from "react-router-dom";

const ProductDetail = (props) => {
  const params = useParams();
  return (
    <section>
      <div>Detalhe do producto</div>
      <p>{params.productId} detalhe dessa porra</p>
    </section>
  );
};

export default ProductDetail;
