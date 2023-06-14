import { BsChevronUp, BsChevronDown } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { increaseItem, reduceITem, removeITem } from '../control/cartSlice';
//item ı açarak gönderdiğimiz için buradan direkt keyleri ile karşılyabiliriz
// eslint-disable-next-line react/prop-types
const CourseItems = ({ id, title, price, img, quantity}) => {

  const dispatch=useDispatch()
  return (
    <div className='b-item' key={id}>
      <img className='b-item-01' src={img} alt="" />
      <div className='b-item-02'>
        <h4>{title}</h4>
        <h4>{price}TL</h4>
        <div className='b-item-02-A'>
          <button>
            <BsChevronUp onClick={() => {
              dispatch(increaseItem(id))
            }}/>
          </button>
          <p>{quantity}</p>
          <button>
            <BsChevronDown onClick={() => {
              dispatch(reduceITem(id))
            }} />
          </button>
        </div>
      </div>
      <button className='b-item-03' onClick={() => {
        dispatch(removeITem(id))
      }}>Sil</button>
    </div>
  )
};

export default CourseItems;
