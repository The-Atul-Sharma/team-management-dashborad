export default (state = { membersList: [], }, action = {}) => {
  switch (action.type) {
    case 'ADD_MEMBER':
      let updatedMembersList = [...state.membersList, action.memberInfo];
      // Set in localStorage
      localStorage.setItem('membersList', JSON.stringify(updatedMembersList));
      return {
        ...state,
        membersList: updatedMembersList,
      };
    case 'DELETE_MEMBER':
      updatedMembersList = state.membersList.filter(member => member.id !== action.memberId);
      localStorage.setItem('membersList', JSON.stringify(updatedMembersList));
      return {
        ...state,
        membersList: updatedMembersList,
      };
    case 'SORT_MEMBERS':
      let sortedMembersList = [];
      // Asc sort
      if (action.sortOrder) {
        sortedMembersList = state.membersList.sort(function(a, b){
          let nameA = a[action.sortBy].toLowerCase(), nameB = b[action.sortBy].toLowerCase();
          if (nameA < nameB)
            return -1; 
          if (nameA > nameB)
            return 1;
          return 0;
        });
      }  else {
        // Desc sort
        sortedMembersList = state.membersList.sort(function(a, b){
          let nameA = a[action.sortBy].toLowerCase(), nameB = b[action.sortBy].toLowerCase();
          if (nameA > nameB)
            return -1; 
          if (nameA > nameB)
            return 1;
          return 0;
        });
      }
      return {
        membersList: sortedMembersList,
      };
    // case 'CHECK_MEMBER':
    //   console.log("state", state, "action", action);
    //   state.membersList.forEach((member, index) => {
    //     if (member.id === action.memberInfo.id) {
    //       member.isChecked = action.memberInfo.isChecked;
    //       updatedMembersList = [...state.membersList, member];
    //       return;
    //     }
    //   });
    //   localStorage.setItem('membersList', JSON.stringify(updatedMembersList));
    //   return {
    //     membersList: updatedMembersList,
    //   };
    // case 'CHECK_ALL_MEMBERS':
    //   console.log("state", state, "action", action);
    //   // updatedMembersList = state.membersList.filter(member => member.id !== action.memberId);
    //   // localStorage.setItem('membersList', JSON.stringify(updatedMembersList));
    //   return {
    //     ...state,
    //   };
    default:
      return state;
  }
};