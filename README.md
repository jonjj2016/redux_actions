# redux_actions

### Examples

#### CRUD ACTIONS

basic usage
create actions file

```JS
import { generateActions } from 'react_actions_generator';

export const [types, actions] = generateActions({
  action: 'projects',
})

```

inYour React Component

```JS

import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { actions } from './actions'

const Component = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    const payload = { name: 'John Doe' }
    dispatch(actions.find_start(payload))
  }, [])

  return <div>Component</div>
}

export default Component


```

in this case we will generate

## TYPES

```JS
  CREATE_START: 'CREATE_PROJECTS_START',
  CREATE_SUCCESS: 'CREATE_PROJECTS_SUCCESS',
  CREATE_FAILED: 'CREATE_PROJECTS_FAILED',
  PATCH_START: 'PATCH_PROJECTS_START',
  PATCH_SUCCESS: 'PATCH_PROJECTS_SUCCESS',
  PATCH_FAILED: 'PATCH_PROJECTS_FAILED',
  REMOVE_START: 'REMOVE_PROJECTS_START',
  REMOVE_SUCCESS: 'REMOVE_PROJECTS_SUCCESS',
  REMOVE_FAILED: 'REMOVE_PROJECTS_FAILED',
  GET_START: 'GET_PROJECTS_START',
  GET_SUCCESS: 'GET_PROJECTS_SUCCESS',
  GET_FAILED: 'GET_PROJECTS_FAILED',
  FIND_START: 'FIND_PROJECTS_START',
  FIND_SUCCESS: 'FIND_PROJECTS_SUCCESS',
  FIND_FAILED: 'FIND_PROJECTS_FAILED',

```

## ACTIONS

```JS
create_start: [Function (anonymous)],
  create_success: [Function (anonymous)],
  create_failed: [Function (anonymous)],
  patch_start: [Function (anonymous)],
  patch_success: [Function (anonymous)],
  patch_failed: [Function (anonymous)],
  remove_start: [Function (anonymous)],
  remove_success: [Function (anonymous)],
  remove_failed: [Function (anonymous)],
  get_start: [Function (anonymous)],
  get_success: [Function (anonymous)],
  get_failed: [Function (anonymous)],
  find_start: [Function (anonymous)],
  find_success: [Function (anonymous)],
  find_failed: [Function (anonymous)],
```

## Method and Loading

By passing method we will get actions specifically for that method
And with loading true we will have loading action as well

```JS
import { generateActions } from 'react_actions_generator';

const [types, actions] = generateActions({
  action: 'projects',
  loading: true,
  method: 'get'
})

// result

{
  GET_START: 'GET_PROJECTS_START',
  GET_SUCCESS: 'GET_PROJECTS_SUCCESS',
  GET_FAILED: 'GET_PROJECTS_FAILED',
  GET_LOADING: 'GET_PROJECTS_LOADING'
}
{
  get_start: [Function (anonymous)],
  get_success: [Function (anonymous)],
  get_failed: [Function (anonymous)],
  get_loading: [Function (anonymous)]
}

```

### Unique

Whenever we need to have unique keys as well we can pass unique true

```JS
import { generateActions } from 'react_actions_generator';

const [types, actions] = generateActions({
  action: 'projects',
  unique: true,
  loading:true,

})
// result
//types
{
  PROJECTS_CREATE_START: 'CREATE_PROJECTS_START',
  PROJECTS_CREATE_SUCCESS: 'CREATE_PROJECTS_SUCCESS',
  PROJECTS_CREATE_FAILED: 'CREATE_PROJECTS_FAILED',
  CREATE_LOADING: 'CREATE_PROJECTS_LOADING',
  PROJECTS_PATCH_START: 'PATCH_PROJECTS_START',
  PROJECTS_PATCH_SUCCESS: 'PATCH_PROJECTS_SUCCESS',
  PROJECTS_PATCH_FAILED: 'PATCH_PROJECTS_FAILED',
  PATCH_LOADING: 'PATCH_PROJECTS_LOADING',
  ...
}
//actions
{
  projects_create_start: [Function (anonymous)],
  projects_create_success: [Function (anonymous)],
  projects_create_failed: [Function (anonymous)],
  create_loading: [Function (anonymous)],
  projects_patch_start: [Function (anonymous)],
  projects_patch_success: [Function (anonymous)],
  projects_patch_failed: [Function (anonymous)],
  patch_loading: [Function (anonymous)],
  ...
}
```

# Custom Actions

```JS
import { customActions } from 'react_actions_generator';

const [types, actions] = customActions({
  action: 'model',
  methods: ['open', 'close', 'toggle'],
})


```

#### Custom Types

```JS
{
  MODEL_OPEN: 'MODEL_OPEN',
  MODEL_CLOSE: 'MODEL_CLOSE',
  MODEL_TOGGLE: 'MODEL_TOGGLE'
}
```

#### Custom Actions

```JS
{
    model_open: [Function (anonymous)],
  model_close: [Function (anonymous)],
  model_toggle: [Function (anonymous)]
}
```
