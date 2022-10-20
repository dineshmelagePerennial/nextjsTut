
function UserList({ data }) {
  return (
    <>
      <h1>User page</h1>
      <h2>{data[0].appConfig.tenantName}</h2>
    </>
  );
}

export default UserList;

export async function getStaticProps() {
  const res = await fetch("https://5ff6bee8e7164b0017e19a73.mockapi.io/v1/themeApi");
  const data = await res.json();
  console.log(data);

  return {
    props: {
      data: data,
    },
  };
}
