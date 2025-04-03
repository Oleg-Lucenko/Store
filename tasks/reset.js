import { deleteAsync }  from 'del'; 

function reset() {
    return deleteAsync('dist');
};


export {reset};