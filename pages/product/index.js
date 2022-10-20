import Link from 'next/link'

function MainProduct() {
  return (
    <>
      <h2><Link href='/'><a>home</a></Link></h2>
      <h1>Main Product Page</h1>
      <h2><Link href='/product/1'><a>Product1</a></Link></h2>
      <h2><Link href='/product/2'><a>Product2</a></Link></h2>
      <h2><Link href='/product/3'><a>Product3</a></Link></h2>
    </>
  );
}

export default MainProduct;
