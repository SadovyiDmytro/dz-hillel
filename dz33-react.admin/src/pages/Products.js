import { Typography, Table, Image } from 'antd';
import { useEffect, useState } from 'react';
import './Products.css';

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(response => response.json())
      .then(data => {
        if (data.products && Array.isArray(data.products)) {
          setProducts(data.products);
        }
      });
  }, []);

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
    },
    {
      title: 'Title',
      dataIndex: 'title',
    },
    {
      title: 'Description',
      dataIndex: 'description',
    },
    {
      title: 'Price',
      dataIndex: 'price',
      render: price => `$${price}`,
    },
    {
      title: 'Thumbnail',
      dataIndex: 'thumbnail',
      render: thumbnail => <Image src={thumbnail} alt="Thumbnail" />,
    },
  ];

  return (
    <div>
      <Typography.Title level={4}>Products</Typography.Title>
      <Table columns={columns} dataSource={products} rowKey="id" />
    </div>
  );
}

export default Products;
