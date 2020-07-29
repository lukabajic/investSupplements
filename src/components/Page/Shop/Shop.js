import React, { useState, useEffect } from "react";

import ShopBanner from "./ShopBanner/ShopBanner";
import ProductsList from "./ProductsList/ProductsList";
// import Filters from "./Filters/Filters";

const contentful = {
  baseUrl: "https://cdn.contentful.com/",
  spaces: "d2p3mngx8rmv",
  environments: "master",
  contentTypes: "investSupplements",
  accessToken: "rQvJR3olWXqzsSWsdURDU9WCgEeZDWbBtGK97yA2iJQ",
};

const Shop = () => {
  const [items, setItems] = useState([]);

  const productsFetch = ({ includes, items }) => {
    const pictureArray = includes.Asset;

    setItems(
      items.map((item, index) => {
        return {
          name: item.fields.name,
          flavor: item.fields.flavor,
          price: item.fields.price,
          servings: item.fields.servings,
          img: `https:${pictureArray[index].fields.file.url}`,
          id: item.sys.id,
          inCart: false,
        };
      })
    );
  };

  useEffect(() => {
    fetch(
      `${contentful.baseUrl}spaces/${contentful.spaces}/environments/${contentful.environments}/entries?access_token=${contentful.accessToken}&content_type=${contentful.contentTypes}`
    )
      .then((response) => response.json())
      .then((data) => productsFetch(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <React.Fragment>
      <ShopBanner />
      {/* <Filters /> */}
      <ProductsList items={items} />
    </React.Fragment>
  );
};

export default Shop;
