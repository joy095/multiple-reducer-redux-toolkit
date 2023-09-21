import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { searchProduct } from "../features/products/productsSlice";

const Header = () => {
  const allproducts = useSelector((state) => state.product);
  const dispatch = useDispatch();

  console.log("allproducts", allproducts?.length);

  const [searchData, setSearchData] = useState("");

  useEffect(() => {
    dispatch(searchProduct(searchData));
  }, [searchData]);

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid container">
          <h4 className="navbar-brand">RTK</h4>

          <div className="collapse navbar-collapse">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {/* <li className="nav-item">
                <Link to="/" className="nav-link">
                  Create Post
                </Link>
              </li> */}
            </ul>
            <input
              className="form-control me-2 w-50"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={searchData}
              onChange={(e) => setSearchData(e.target.value)}
            />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
