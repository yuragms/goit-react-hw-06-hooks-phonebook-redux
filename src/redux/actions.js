export const increment = value => ({
    
       type: 'counter/Increment',
       payload: value,
    
});

export const decrement = value => ({
    
    type: 'counter/decrement',
    payload: value,
 
});