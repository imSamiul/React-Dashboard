import Single from "../../Components/Single/Single";
import { singleProduct } from "../../data";

function Product() {
  return (
    <div>
      <Single {...singleProduct} />
    </div>
  );
}

export default Product;
