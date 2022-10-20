import Link from 'next/link'
function Home() {
  return (
    <>
      <h1>Home page</h1>
      <h3><Link href='/product'><a>Products</a></Link></h3>
    </>
  );
}

export default Home;
