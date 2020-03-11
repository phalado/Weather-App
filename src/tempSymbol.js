const tempSymbol = () => {
  let tmpSmbl = true;

  const setTmpSmbl = () => {
    tmpSmbl = !tmpSmbl;
  };
  const getTmpSmbl = () => (tmpSmbl);

  return { tmpSmbl, setTmpSmbl, getTmpSmbl };
};

export default tempSymbol;