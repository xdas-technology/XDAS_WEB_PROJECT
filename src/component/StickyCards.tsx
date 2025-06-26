"use client"
interface props{
  index:number,
  scrollProgress:number,
};
function StickyCards(props:props) {
  // const [topVal, settopVal] = useState(props.index * 76);
  // useEffect(()=>{
  //   console.log(topVal);
  // },[topVal])
  const topVal = (props.index - props.scrollProgress) * 5;
  

  return (
    
    <div className="sticky flex justify-center h-screen bg-black border-t-2 border-gray-400 border-dashed" style={{top:`${topVal}rem`}}>
      <div className="pt-4 text-white size-svw">
        Card
        
      </div>
    </div>
  )
}

export default StickyCards