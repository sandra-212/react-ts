export const dynamicsort = (property: string, order: string) => {
  let sort_order = 1;
  if (order === 'dsc') {
    sort_order = -1;
  }
  return function (a: any, b: any) {
    if (a[property] < b[property]) {
      return -1 * sort_order;
    } else if (a[property] > b[property]) {
      return 1 * sort_order;
    } else {
      return 0 * sort_order;
    }
  };
};
