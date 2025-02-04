import httpInstance from "@/utils/http";

// 获取banner

export function getBannerAPi() {
  return httpInstance({
    url: "/home/banner",
  });
}

export const findNewAPI = () => {
  return httpInstance({
    url: "/home/new",
  });
};

export const getHotAPI = () => {
  return httpInstance({ url: "/home/hot" });
};

export const getGoodsAPI = () => {
  return httpInstance({ url: "/home/goods" });
};
