
type PropTypes ={
    name:string;
    age:number;
}

const Introduction:React.FC<PropTypes> = ({name,age}) => {
  return (
    <div>
      <strong>Introduction:</strong>
      <p>
        Hi my name is {name} and I am {age} years old
      </p>
    </div>
  );
}

export default Introduction