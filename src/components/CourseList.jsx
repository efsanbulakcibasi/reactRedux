import { useDispatch, useSelector } from "react-redux";
import CourseItems from "./CourseItems";
import { clearCart } from "../control/cartSlice";

const CourseList = () => {
  const dispatch = useDispatch();
  const { cartItems, quantity, total } = useSelector((store) => store.cart);
  return (
    <>
      {/* quantity birin altında olduğu durumda boş bir sayfa gösterip sepet boş yazısı yazması gerekirken
        eğer üstündeyse ürünlerimizin gösterileceği bir senaryo yazmamı gerekir */}
      {quantity < 1 ? (
        <section>
          <header>
            <h2>Sepetim</h2>
            <h4>Sepet boş</h4>  
          </header>
        </section>
      ) : (
        <section>
          <header>
            <h2>Sepetim</h2>
          </header>
          <div className="item">
          {cartItems.map((item) => {
            return <CourseItems key={item.id} {...item} />
            })}
          </div>
          <footer>
            <hr />
            <div>
                <h4>Toplam tutar: <span>{total}TL</span></h4>
            </div>
            <button
             className="cartClearButton"
             onClick={() => dispatch(clearCart())}
            >
              Temizle
            </button>
          </footer>
        </section>
      )}
    </>
  );
};

export default CourseList;
