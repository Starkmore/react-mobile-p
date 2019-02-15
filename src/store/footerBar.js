const types = {
  CHANGE_TAB: "change_tab"
};
const initState = {
  tabs: [
    {
      id: 0,
      tit: "发现",
      icon: "https://img.sqydt.darongshutech.com/token_file_201902151610202016.jpg",
      selectedIcon: "https://img.sqydt.darongshutech.com/token_file_201902151610547556.jpg",
      hash: "/home"
    },
    {
      id: 1,
      tit: "详情",
      icon: "https://img.sqydt.darongshutech.com/token_file_201902151611258016.jpg",
      selectedIcon: "https://img.sqydt.darongshutech.com/token_file_201902151611442487.jpg",
      hash: "/works"
    },
    {
      id: 2,
      tit: "排名",
      icon: "https://img.sqydt.darongshutech.com/token_file_201902151612197522.jpg",
      selectedIcon: "https://img.sqydt.darongshutech.com/token_file_201902151612037411.jpg",
      hash: "/My"
    }
  ],
  selectedTab: 0
};
export const action = {
  changeTab: params => {
    return {
      payload: params,
      type: types.CHANGE_TAB
    };
  }
};

export const footerBarRedurces = (state = initState, action) => {
  switch (action.type) {
    case types.CHANGE_TAB:
      // return state.set("selectedTab", action.payload);
      return {
        ...state,
        selectedTab: action.payload
      };
    default:
      return state;
  }
};
