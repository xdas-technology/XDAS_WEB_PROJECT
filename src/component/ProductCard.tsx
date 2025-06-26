interface props {
  end?:boolean
};

const ProductCard = ({end}:props) => {
  return (
    <div className={`flex justify-${end?'end':'start'} m-45`}>
      <div className="w-132 h-110 bg-xdas-purple-500  ">
          ProductCard
      </div>
    </div>
  )
}

export default ProductCard