# redux_actions

### Examples

```JS
import { initActions } from 'react_actions_generator';

const [types, actions] = initActions({
  type: 'projects',
  loading: true,
  action: 'get',
  crud: true,
})

```

in this case we will generate

## TYPES

```JS
  CREATE_START: 'CREATE_PROJECTS_START',
  CREATE_SUCCESS: 'CREATE_PROJECTS_SUCCESS',
  CREATE_FAILED: 'CREATE_PROJECTS_FAILED',
  CREATE_LOADING: 'CREATE_PROJECTS_LOADING',
  PATCH_START: 'PATCH_PROJECTS_START',
  PATCH_SUCCESS: 'PATCH_PROJECTS_SUCCESS',
  PATCH_FAILED: 'PATCH_PROJECTS_FAILED',
  PATCH_LOADING: 'PATCH_PROJECTS_LOADING',
  REMOVE_START: 'REMOVE_PROJECTS_START',
  REMOVE_SUCCESS: 'REMOVE_PROJECTS_SUCCESS',
  REMOVE_FAILED: 'REMOVE_PROJECTS_FAILED',
  REMOVE_LOADING: 'REMOVE_PROJECTS_LOADING',
  GET_START: 'GET_PROJECTS_START',
  GET_SUCCESS: 'GET_PROJECTS_SUCCESS',
  GET_FAILED: 'GET_PROJECTS_FAILED',
  GET_LOADING: 'GET_PROJECTS_LOADING',
  FIND_START: 'FIND_PROJECTS_START',
  FIND_SUCCESS: 'FIND_PROJECTS_SUCCESS',
  FIND_FAILED: 'FIND_PROJECTS_FAILED',
  FIND_LOADING: 'FIND_PROJECTS_LOADING'

```

## ACTIONS

```JS
create_start: [Function (anonymous)],
  create_success: [Function (anonymous)],
  create_failed: [Function (anonymous)],
  create_loading: [Function (anonymous)],
  patch_start: [Function (anonymous)],
  patch_success: [Function (anonymous)],
  patch_failed: [Function (anonymous)],
  patch_loading: [Function (anonymous)],
  remove_start: [Function (anonymous)],
  remove_success: [Function (anonymous)],
  remove_failed: [Function (anonymous)],
  remove_loading: [Function (anonymous)],
  get_start: [Function (anonymous)],
  get_success: [Function (anonymous)],
  get_failed: [Function (anonymous)],
  get_loading: [Function (anonymous)],
  find_start: [Function (anonymous)],
  find_success: [Function (anonymous)],
  find_failed: [Function (anonymous)],
  find_loading: [Function (anonymous)]
```

# Custom Actions

```JS
import { customTypeGen } from 'react_actions_generator';

const [types, actions] = customTypeGen({
  type: 'model',
  actions: ['open', 'close', 'toggle'],
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
