export default function ServerSideRendered({ data }) {
  return (
    <>
    <h2>{data[0]?.appConfig?.tenantName}</h2>
      {/* {data.map((e) => (
        <h2 key={e.id}>{e.name}</h2>
      ))} */}
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch('https://5ff6bee8e7164b0017e19a73.mockapi.io/v1/themeApi');
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}