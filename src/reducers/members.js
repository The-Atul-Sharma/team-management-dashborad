export default (state = { membersList: [], isAllChecked: false, }, action = {}) => {
  let updatedMembersList = [];
  switch (action.type) {
    case 'ADD_MEMBER':
      updatedMembersList = [...state.membersList, action.memberInfo];
      // Set in localStorage
      localStorage.setItem('membersList', JSON.stringify(updatedMembersList));
      return {
        ...state,
        membersList: updatedMembersList,
      };
    case 'DELETE_MEMBER':
      updatedMembersList = state.membersList.filter(member => member.id !== action.memberId);
      // Set in localStorage
      localStorage.setItem('membersList', JSON.stringify(updatedMembersList));
      return {
        ...state,
        membersList: updatedMembersList,
      };
    case 'SORT_MEMBERS':
      // Asc sort
      if (action.sortOrder) {
        updatedMembersList = state.membersList.sort(function(a, b) {
          let nameA = a[action.sortBy].toLowerCase(), nameB = b[action.sortBy].toLowerCase();
          if (nameA < nameB)
            return -1; 
          if (nameA > nameB)
            return 1;
          return 0;
        });
      }  else {
        // Desc sort
        updatedMembersList = state.membersList.sort(function(a, b) {
          let nameA = a[action.sortBy].toLowerCase(), nameB = b[action.sortBy].toLowerCase();
          if (nameA > nameB)
            return -1; 
          if (nameA > nameB)
            return 1;
          return 0;
        });
      }
      return {
        ...state,
        membersList: updatedMembersList,
      };
    case 'CHECK_MEMBER':
      updatedMembersList = state.membersList.map(member => {
        if(member.id === action.memberInfo.id) {
          let updatedMember = Object.assign({}, action.memberInfo);
          updatedMember.isChecked = !action.memberInfo.isChecked;
          return { ...member, ...updatedMember };
        }
        return member;
      });
      // Set in localStorage
      localStorage.setItem('membersList', JSON.stringify(updatedMembersList));
      return {
        ...state,
        membersList: updatedMembersList,
      };
    case 'CHECK_ALL_MEMBERS':
      updatedMembersList = state.membersList.map(member => {
        let updatedMember = Object.assign({}, member);
          updatedMember.isChecked = action.isAllChecked;
          return { ...member, ...updatedMember };
      });
      // Set in localStorage
      localStorage.setItem('membersList', JSON.stringify(updatedMembersList));
      localStorage.setItem('isAllChecked', JSON.stringify(action.isAllChecked));
      return {
        ...state,
        membersList: updatedMembersList,
        isAllChecked: action.isAllChecked,
      };
    default:
      return state;
  }
};