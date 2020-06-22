
const routes = (state = [], action) => {
  switch (action.type) {
    case 'SET_ROUTES':
      return action.routes
    default:
      return state
  }
}

export default routes