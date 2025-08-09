export const Button = ({ children, varient = "primary", isBold= false}) => {
  return (
    <button className= {`flex items-center justify-center p-4 rounded-[50px]  font-graphik text-xl leading-5 ${
    varient === 'primary' ? 'bg-primary text-white' : 'bg-white text-primary'
    
    }
    
    ${isBold && 'font-graphik-bold'}
    
    `}>
      {" "}
      {children}{" "}
    </button>
  );
};
