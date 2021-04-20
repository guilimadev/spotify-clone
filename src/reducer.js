export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,   
    //REMOVER DEPOIS DE FINALIZAR DESENVOLVIMENTO
   // token: "BQDl6rCZm9gX7o3dxzDqBzkzGkwyTT8vXd7QNaNZd8zWbSNMVQt0CG7wgOZqWYvGNVWIsBt24uS0VCUwL3-cMsSkhtOy30eEqFzPhs7WVhd6FyH0I5osf9p9ANqhn0uc59gxbb_NYeuvWqp7smY9EYIXuEg",
}

const reducer = (state, action) => {
console.log(action);
    
    switch(action.type){
        case 'SET_USER':
            return { 
                ...state,
                user: action.user,
            }
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token,
            }
        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists,
            }
        case 'SET_DISCOVER_WEEKLY':
            return {
                ...state,
                discover_weekly: action.discover_weekly,
            }
        default: 
            return state;     
    }

}

export default reducer;