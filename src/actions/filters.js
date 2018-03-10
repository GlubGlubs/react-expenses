//Edit Text filter

export const setTextFilter = (text ='') => ({
    type: 'SET_TEXT_FILTER',
    text
  });
  
  //Sort by amount
  
  export const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'
  });
  
  //Sort by Date
  
  export const sortByDate = () => ({
    type: 'SORT_BY_DATE'
  });
  
  
  //Filter setStartDate
  
  export const setStartDate = (startDate = undefined) => ({
    type: 'SET_START_DATE',
    startDate
  })
  
  //Filter setEndDate
  
  export const setEndDate = (endDate = undefined) => ({
    type: 'SET_END_DATE',
    endDate
  })