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

const newTypeGen = ({ constant, crud, loading, action }) => {
  let Types = ['CREATE', 'PATCH', 'REMOVE', 'GET', 'FIND']
  if (!crud && action) {
    console.log(crud)
    Types = [action]
  }
  let TypeArr = []

  let obj = {}
  Types.forEach((item) => {
    let block = {
      [`${item}_START`]: `${item}_${constant}_START`,
      [`${item}_SUCCESS`]: `${item}_${constant}_SUCCESS`,
      [`${item}_FAILED`]: `${item}_${constant}_FAILED`,
    }
    if (loading) {
      block[`${item}_LOADING`] = `${item}_${constant}_LOADING`
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

const custypeGen = (optional, vars) => {
  let Types = []
  let TypeArr = []
  if (optional) {
    optional = optional.map((option) => {
      return option.toUpperCase()
    })

    Types = [...Types, ...optional]
  }

  let obj = {}
  Types.forEach((item) => {
    let block = {}
    vars.forEach((variable) => {
      block = {
        ...block,
        [`${item}_${variable.toUpperCase()}`]: `${item}_${variable.toUpperCase()}`,
      }
    })

    obj = {
      ...block,
    }
  })
  TypeArr = {
    ...obj,
  }

  return TypeArr
}
const initActions = ({ type, action = '', crud = false, loading = false }) => {
  if (!type) {
    throw new Error('Type is required')
  }
  const types = newTypeGen({
    constant: type.toUpperCase(),
    type,
    crud,
    loading,
    action: action.toUpperCase(),
  })
  const actions = actionGen(types)
  return [types, actions]
}
const customTypeGen = ({ type, actions }) => {
  const types = custypeGen([type], actions)
  const customActions = actionGen(types)
  return [types, customActions]
}
module.exports = {
  customTypeGen,
  initActions,
}
