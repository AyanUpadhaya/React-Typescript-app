type AppProps = {
  message: string;
}; /* use `interface` if exporting so that consumers can extend */

const TestSection: React.FC<AppProps> = ({ message }) => {
  return <div>{message}</div>;
};

export default TestSection;
