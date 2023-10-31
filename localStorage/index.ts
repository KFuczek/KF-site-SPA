// interface DataWithTime {
//   time: Date;
//   data: unknown;
// }
//
// export const addToLocalStorage = (key: string, data: never): void => {
//   const dateWithTime = {
//     data,
//     time: new Date()
//   };
//   localStorage.setItem(key, JSON.stringify(dateWithTime));
// };
//
// export const getFromLocalStorage = (key: string): DataWithTime | null => {
//   const data = localStorage.getItem(key) as string;
//
//   if (!data) {
//     return null;
//   }
//
//   return JSON.parse(data) as DataWithTime;
// };
//
// export const removeFromLocalStorage = (key: string): void => {
//   localStorage.removeItem(key);
// };
//
// // export const checkDataIsExpired = (
// //   date: Date,
// //   expireTime = 60 * 60 * 1000
// // ): boolean => {
// //   return new Date() - date < expireTime;
// // };
//
// export const getFromLocalStorageWithExpireTime = (
//   key: string,
//   expireTime: number
// ) => {
//   const localStorageData = getFromLocalStorage(key);
//   if (!localStorageData) {
//     return null;
//   }
//
//   const { data, time } = localStorageData;
//   const isExpired = checkDataIsExpired(time, expireTime);
//
//   if (isExpired) {
//     return null;
//   }
//
//   return data;
// };
