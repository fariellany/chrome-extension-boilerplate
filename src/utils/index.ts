
/**
 *  chrome.storage.sync.set  chrome.storage.local.set
 *  设置  await storage.set(list);
 *  获取  await storage.get();
 *  清除  await storage.remove();
 *  
 *  chrome.storage.sync.set  保存的数据较小
 *  chrome.storage.local.set  保存的数据较大
 */
export const storageUtils = {
  set(key: string, data: any) {
    return new Promise((resolve, reject) => {
      return chrome.storage.local.set({ [key]: data }, function () {
        resolve(true)
      });
    })
  },
  get(key: string) {
    return new Promise((resolve, reject) => {
      return chrome.storage.local.get(key, function (result) {
        resolve(result[key])
      });
    })
  },
  remove(key: string) {
    chrome.storage.local.remove([key], function () {
      // if (chrome.runtime.lastError) {
      //   console.error(error);
      // }
    })
  }
}

/**
 * 
 * @param target 
 * @param current 
 * @returns 
 */
export const conCompare = (target: string, current: string): boolean => {
  if (!target) {
    return false
  }
  return target.startsWith(current);
}

/**
 * @param headers
 * @returns 
 */
export const getHeaderObj = (headers: Record<string, any>) => {
  const obj = {} as any;
  headers.map((item: any) => {
    obj[item.name] = item.value
  })
  return obj
}
