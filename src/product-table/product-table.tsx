import {CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow} from "@coreui/react";
import {useAppSelector} from "../store.ts";
import {getEnumValues, PRODUCTS_TABLE_FIELDS_INFO, ProductsTableFields} from "./consts.ts";
import {selectProductsList} from "../slice/products-slice.ts";
import ProductRow from "../product-row/product-row.tsx";


const ProductTable = () => {
  const productsList = useAppSelector(selectProductsList)
  const totalCount = productsList.reduce((prev, curr) => {
    return prev + curr.totalCount;
  }, 0)
  const totalCountInTheWay = productsList.reduce((prev, curr) => {
    return prev + curr.onTheWayCount;
  }, 0)

  const renderHeaderCellContent = (field: ProductsTableFields) =>
    PRODUCTS_TABLE_FIELDS_INFO[field].name;

  return (<CTable>
    <CTableHead color={'secondary'}>
      <CTableRow>
        {getEnumValues<ProductsTableFields>(ProductsTableFields)

          .map((item) => (
            <CTableHeaderCell
              key={item}
            >
              {renderHeaderCellContent(item)}
            </CTableHeaderCell>
          ))}
      </CTableRow>
    </CTableHead>
    <CTableBody>
      {productsList.map((item, index) => {
        return (
          <CTableRow key={index}>
            {Object.keys(item).map((field) => {
              return <ProductRow product={item} key={field} field={field}/>
            })}
          </CTableRow>
        );
      })}
      <CTableRow>
        <CTableDataCell colSpan={5}>Итого</CTableDataCell>
        <CTableDataCell>{totalCountInTheWay}</CTableDataCell>
        <CTableDataCell>{totalCount}</CTableDataCell>
      </CTableRow>
    </CTableBody>
  </CTable>)
}

export default ProductTable