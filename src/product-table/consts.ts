export const getEnumValues = function <T>(
  Enum: Record<string, string | number>
) {
  const allValues = Object.values(Enum);
  const numericValues = allValues.filter(
    (item): item is number => typeof item === 'number'
  );
  const resultValues = numericValues.length ? numericValues : allValues;
  return resultValues as unknown as Array<T>;
};

export enum ProductsTableFields {
  Barcode,
  Product,
  Article,
  Size,
  AvailableToOrder,
  OnTheWayCount,
  TotalCount,
}

export const PRODUCTS_TABLE_FIELDS_INFO = {
  [ProductsTableFields.Barcode]: { width: 15, name: 'Баркод' },
  [ProductsTableFields.Product]: { width: 10, name: 'Предмет' },
  [ProductsTableFields.Article]: { width: 20, name: 'Артикул поставщика' },
  [ProductsTableFields.Size]: { width: 10, name: 'Размер' },
  [ProductsTableFields.AvailableToOrder]: { width: 15, name: 'Доступно к заказу' },
  [ProductsTableFields.OnTheWayCount]: { width: 15, name: 'Товары в пути' },
  [ProductsTableFields.TotalCount]: { width: 15, name: 'Итого кол-во товара' },
};