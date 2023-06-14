import { BsFillBasketFill } from "react-icons/bs";
import { useSelector } from "react-redux";

const Navbar = () => {
  //quantity ile ilgili işlem yapacağımız için ona ulaşmamız gerekir
  //useSelector ile store içinden reducer atamasında ne isim verdiysek onu kullanarak ulaşıyoruz
  const {quantity} = useSelector((store) => store.cart)
  return (
    <nav className="header">
      <div className="a-item">
        <h3 className="a-item-01">Kurslarım Uygulaması</h3>
        <div className="a-item-02">
          <p>{quantity}</p>
          <BsFillBasketFill className="a-item-03" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
