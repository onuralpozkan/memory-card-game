const { Provider, Consumer } = React.createContext();

const ScoreKeeperProvider = () => {
  const [point, setPoint] = useState(007);
  const addOne = () => {
    setPoint((prevPoint) => prevPoint + 1);
  };

  return <Provider value={(point, addOne)}>{props.children}</Provider>;
};

export { ScoreKeeperProvider, Consumer as ScoreKeeperConsumer };
