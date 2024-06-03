export const replaceMongoIdInArray = (array) => {
  const mappedArray = array.map(item => {
    return {
      id: item._id.toString(),
      ...item
    }
  }).map(({ _id, ...rest }) => rest);

  return mappedArray;
}

export const replaceMongoIdInObject = (obj) => {
  const { _id, ...updatedObj } = { ...obj, id: obj._id.toString() };
  return updatedObj;
}


import bcrypt from 'bcryptjs';

export async function saltAndHashPassword(password) {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
}





export function findUniqueCategories(products) {
  const categoryNames = products.map(product => product.category);
  const uniqueCategoryNames = [...new Set(categoryNames)];
  return uniqueCategoryNames;
}
