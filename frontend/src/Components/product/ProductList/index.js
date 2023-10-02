import React, { useEffect, useState } from "react";
import "./productList.scss";
import Loader from "../../../Components/Loader";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { AiOutlineEye } from "react-icons/ai";
import SearchFilter from "../../SearchFilter";
import { useDispatch, useSelector } from "react-redux";
import {
  SEARCH_FILTER_PRODUCT,
  selectFilteredProducts,
} from "../../../redux/features/product/searchFilterSlice";
import ReactPaginate from "react-paginate";

const ProductList = ({ products, isLoading }) => {
  const [search, setSearch] = useState("");

  const shortenText = (text, n) => {
    if (text.length > n) {
      const reducedText = text.substring(0, n).concat("...");
      return reducedText;
    }
    return text;
  };

  //access state
  const dispatch = useDispatch();
  const filteredProduct = useSelector(selectFilteredProducts);

  // Begin Pagination
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 2;

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;

    setCurrentItems(filteredProduct.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(filteredProduct.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, filteredProduct]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % filteredProduct.length;
    setItemOffset(newOffset);
  };
  // End Pagination

  useEffect(() => {
    dispatch(SEARCH_FILTER_PRODUCT({ products, search }));
  }, [search, dispatch, products]);
  return (
    <div className="product-list">
      <hr />
      <div className="table">
        <div className="--flex-between --flex-dir-column">
          <span>
            <h3>Inventory Items</h3>
          </span>
          <span>
            <SearchFilter
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </span>
        </div>
        {isLoading && <Loader />}
        <div className="table">
          {!isLoading && products.length === 0 ? (
            <p>--No product found, please add a product...</p>
          ) : (
            <table>
              <thead>
                <tr>
                  <th>S/n</th>
                  <th>Name</th>
                  <th>Category</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Value</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {currentItems.map((product, index) => {
                  const { _id, name, category, price, quantity } = product;
                  return (
                    <tr key={_id}>
                      <td>{index + 1}</td>
                      <td>{shortenText(name, 16)}</td>
                      <td>{category ? category : ""}</td>
                      <td>
                        {"$"}
                        {price ? Number(price) : 0}
                      </td>
                      <td>{quantity ? Number(quantity) : 0}</td>
                      <td>
                        {"$"}
                        {Number(price) * Number(quantity)}
                      </td>
                      <td className="icons">
                        <span>
                          {" "}
                          <AiOutlineEye size={20} color="purple" />
                        </span>
                        <span>
                          {" "}
                          <FaEdit size={20} color="green" />
                        </span>
                        <span>
                          {" "}
                          <FaTrashAlt size={20} color="red" />
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </div>
        <ReactPaginate
          breakLabel="..."
          nextLabel="Next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={2}
          pageCount={pageCount}
          previousLabel="< Previous"
          renderOnZeroPageCount={null}
          containerClassName="pagination"
          pageLinkClassName="page-num"
          previousLinkClassName="page-num"
          nextLinkClassName="page-num"
          activeLinkClassName="activePage"
        />
      </div>
    </div>
  );
};

export default ProductList;
