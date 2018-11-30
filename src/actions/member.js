export const addMember = memberInfo => {
  return {
    type: 'ADD_MEMBER', 
    memberInfo,
  };
}

export const deleteMember = memberId => {
  return {
    type: 'DELETE_MEMBER', 
    memberId,
  };
}

export const checkedMember = (memberInfo, isChecked) => {
  return {
    type: 'CHECK_MEMBER', 
    memberInfo,
    isChecked,
  };
}

export const checkedAllMembers = isAllChecked => {
  return {
    type: 'CHECK_ALL_MEMBERS', 
    isAllChecked,
  };
}

export const sortMembersList = (sortBy, sortOrder) => {
  return {
    type: 'SORT_MEMBERS', 
    sortBy,
    sortOrder,
  };
}