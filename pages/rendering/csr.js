import { useEffect, useState } from 'react';

export default function ClientSideRendered() {
  const [state, setState] = useState([]);

  async function getData() {
    const res = await fetch("https://5ff6bee8e7164b0017e19a73.mockapi.io/v1/themeApi");
    const data = await res.json();
    setState(data);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
    <h2>{state[0]?.appConfig?.tenantName}</h2>
      {/* {state.map((e) => (
        // <h2 key={e.id}>{e.name}</h2>
      ))} */}
    </>
  );
}