const actionGen = (arr) => {
  let actionObj = {}
  let funNameList = []
  let funcName = []
  let typeList = []

  funNameList = [...funNameList, ...Object.keys(arr)]
  typeList = [...typeList, ...Object.values(arr)]

  funNameList.forEach((item) => {
    funcName.push(item.toLowerCase())
  })

  funcName.forEach((item, index) => {
    actionObj[item] = (data, route) => ({
      [`type`]: typeList[index],
      [`payload`]: data,
      [`route`]: route,
    })
  })

  return actionObj
}

const newTypeGen = ({ action, crud, loading, method, unique }) => {
  let Methods = ['CREATE', 'PATCH', 'REMOVE', 'GET', 'FIND']
  if (!crud && method) {
    Methods = [method]
  }
  let TypeArr = []

  let obj = {}
  Methods.forEach((item) => {
    let block = {
      [`${unique ? action + '_' : ''}${item}_START`]: `${item}_${action}_START`,
      [`${
        unique ? action + '_' : ''
      }${item}_SUCCESS`]: `${item}_${action}_SUCCESS`,
      [`${
        unique ? action + '_' : ''
      }${item}_FAILED`]: `${item}_${action}_FAILED`,
    }
    if (loading) {
      block[`${item}_LOADING`] = `${item}_${action}_LOADING`
    }

    obj = {
      ...obj,
      ...block,
    }
  })
  TypeArr = {
    ...obj,
  }

  return TypeArr
}

const customTypeGenerator = (action, methods) => {
  const upperCaseAction = action.toUpperCase()

  let TypeArr = {}
  methods.forEach((method) => {
    TypeArr[
      `${upperCaseAction}_${method.toUpperCase()}`
    ] = `${upperCaseAction}_${method.toUpperCase()}`
  })

  return TypeArr
}

const generateActions = ({
  method,
  action = '',
  crud = false,
  loading = false,
  unique = false,
}) => {
  if (!method) {
    throw new Error('Method is required')
  }
  const types = newTypeGen({
    action: action.toUpperCase(),
    crud,
    loading,
    method: method.toUpperCase(),
    unique,
  })
  const actions = actionGen(types)
  return [types, actions]
}

const customActions = ({ methods, action }) => {
  if (!Array.isArray(methods)) {
    throw new Error('Methods should be an Array')
  }
  if (!methods.length) {
    throw new Error('Methods is required')
  }
  if (!action) {
    throw new Error('Method is required')
  }
  const types = customTypeGenerator(action, methods)
  const actions = actionGen(types)
  return [types, actions]
}
module.exports = {
  generateActions,
  customActions,
}
