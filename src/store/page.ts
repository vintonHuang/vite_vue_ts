/*
 * @Author: Vinton
 * @Date: 2022-03-04 22:20:14
 * @Description: file content
 */
import { defineStore } from "pinia";

export const usePageStore = defineStore({
  id: "page",
  state: () => ({
    name: "超级管理员",
  }),
  getters: {
    nameLength: (state) => state.name.length,
  },
});
