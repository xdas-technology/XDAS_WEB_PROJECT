import ProductCard from "./ProductCard"
const ScrollProductCard = () => {
  return (
    <div className=" relative ">
      <div className="sticky bg-black h-[100vh] top-0 text-white">
        Sticky
      </div>
      <div className=" relative z-20 pb-[100vh] ">
        <ProductCard end={true}/>
        <ProductCard />
        <ProductCard end={true}/>
        <ProductCard/>
        

      </div>
    </div>
  )
}

export default ScrollProductCard